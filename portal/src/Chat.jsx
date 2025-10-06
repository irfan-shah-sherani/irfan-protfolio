import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function AdminChat() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);


  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, selectedUser]);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/messages/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);


  useEffect(() => {
    if (!selectedUser) return;
    const fetchMessages = async () => {
      const res = await axios.post("http://localhost:3000/messages/user", { userId: selectedUser });
      setMessages(prev => ({ ...prev, [selectedUser]: res.data }));
      socket.emit("joinRoom", selectedUser); // join user room
    };
    fetchMessages();
  }, [selectedUser]);

  
useEffect(() => {
  const handleMsg = (msg) => {
    setMessages(prev => ({
      ...prev,
      [msg.userId]: [...(prev[msg.userId] || []), msg]
    }));
  };

  socket.on("receiveMessage", handleMsg);
  return () => socket.off("receiveMessage", handleMsg);
}, []);

  const sendMessage = async () => {
    if (!text || !selectedUser) return;
    const newMsg = { userId: selectedUser, role: "Admin", message: text };
    await axios.post("http://localhost:3000/messages", newMsg);

    socket.emit("sendMessage", newMsg);
    
    setMessages(prev => ({
      ...prev,
      [selectedUser]: [...(prev[selectedUser] || []), newMsg]
    }));
    setText("");
  };

  return (
    <section className="flex h-[80vw] w-screen pt-30 gap-2 px-4">
      <div className="w-[30vw]  flex flex-col overflow-y-auto gap-2">
        {users.map(uid => (
          <div key={uid} onClick={() => setSelectedUser(uid)} className={`cursor-pointer p-3  border ${selectedUser===uid?"bg-gray-400 text-white border-black":"bg-white"}`}>
            User {uid.slice(0,6)}
          </div>
        ))}
      </div>

      <div className="w-[70vw] flex border flex-col border-l p-4">
        {selectedUser ? (
          <>
            <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-3 mb-4">
              {(messages[selectedUser] || []).map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role==="Admin"?"justify-end":"justify-start"}`}>
                  <div className={`px-3 py-1  max-w-xs ${msg.role==="Admin"?"bg-gray-400 border text-black":"border text-black"}`}>
                    {msg.message}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex">
              <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="Type message" className="flex-1 px-3 py-2 border focus:outline-none"/>
              <button onClick={sendMessage} className="px-4 py-2 bg-gray-400 border text-black">Send</button>
            </div>
          </>
        ) : <div className="flex-1 flex justify-center items-center text-gray-500">Select a user</div>}
      </div>
    </section>
  );
}
