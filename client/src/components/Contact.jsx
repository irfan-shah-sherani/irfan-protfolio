import { useState } from "react";
import axios from "axios"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    Second: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    const res = axios.post('http://localhost:3000/contact', form)
  };

  return (
    <section className="relative h-auto py-20 bg-black dark:bg-transparent text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden dark:hidden leading-[0] z-50">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#e8e8e8ff"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Contact me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={form.name}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              name="Second"
              placeholder="Second name"
              value={form.Second}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none py-2"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={1}
              className="border-b border-gray-400 focus:outline-none py-2 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-amber-400 text-white px-6 py-3 rounded hover:bg-amber-500 transition"
            >
              Talk with us
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full dark:hidden overflow-hidden leading-[0] rotate-180 z-50">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#e8e8e8ff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
