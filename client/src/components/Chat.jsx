import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import { BiSolidMessageSquare } from "react-icons/bi";

const socket = io("http://localhost:3000");

export default function Chat() {

  const [isOpen, setIsOpen] = useState([false])

  const toggleMes = () => {
    if (!isOpen) {
      setIsOpen(true);

    } else {
      setIsOpen(false);
    }
  }
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const messagesEndRef = useRef(null);

  // Generate/load unique userId
  const [userId] = useState(() => {
    let storedId = localStorage.getItem("userId");
    if (!storedId) {
      storedId = crypto.randomUUID();
      localStorage.setItem("userId", storedId);
    }
    return storedId;
  });

  const currentUserRole = "USER";

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Join user's room and load old messages
  useEffect(() => {
    // Join room for this user
    socket.emit("joinRoom", userId);

    // Load old messages from DB
    const fetchMessages = async () => {
      try {
        const res = await axios.post("http://localhost:3000/messages/user", { userId });
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages", err);
      }
    };
    fetchMessages();

    // Listen for real-time messages
    const handleMsg = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handleMsg);
    return () => socket.off("receiveMessage", handleMsg);
  }, [userId]);

  const sendMessage = () => {
    if (!text) return;

    const newMsg = { userId, role: currentUserRole, message: text };

    socket.emit("sendMessage", newMsg);

    setMessages((prev) => [...prev, newMsg]);
    setText("");
  };

  return (
    <section className="fixed flex flex-row bottom-10 right-10 gap-2 z-200">
      {
        isOpen ? <BiSolidMessageSquare onClick={toggleMes} size={30} className=" dark:text-white cursor-pointer" /> :

          <div className="h-100 flex flex-col bg-white/40 dark:bg-white/5 border-[1px] border-white backdrop-blur-lg rounded-md shadow-lg w-80">
            <RxCross2 size={20} onClick={toggleMes} className="m-2 ml-auto cursor-pointer dark:text-white" />

            <div className="flex-1 px-2 overflow-y-auto space-y-3 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === currentUserRole ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-xs ${msg.role === currentUserRole ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                      }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="self-end w-full flex">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-black border border-gray-300 focus:outline-none"
              />
              <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2">
                Send
              </button>
            </div>
          </div>
      }


    </section>
  );
}
