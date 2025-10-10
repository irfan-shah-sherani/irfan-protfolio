import { useState } from "react";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Admin Panel
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Chat
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
          >
            Settings
          </a>
          <button className="px-4 py-1.5 bg-gray-400 hover:bg-gray-500 text-black font-medium rounded-md transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
