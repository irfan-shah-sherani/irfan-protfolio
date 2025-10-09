import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { FiFacebook, FiGithub, FiLink, FiLinkedin, } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Navebar({ scrollTo }) {
  const menu = useRef();
  const [darkMode, setDarkMode] = useState(false);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      gsap.fromTo(
        menu.current,
        { y: -500, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
      setIsOpen(true);

    } else {
      // show
      setIsOpen(false);
    }
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };



  return (
    <section className="fixed z-[1001] w-screen   flex flex-row justify-center items-center py-5 text-white">
      <div style={{ borderRadius: isOpen ? "0.25rem 0.25rem 0 0" : "0.25rem" }} className="w-100 z-10 border border-white/20 flex flex-row justify-between  border-white items-center px-2 py-1 dark:bg-white/10  bg-white/70 backdrop-blur-lg ">
        {
          isOpen ? <RxCross2 onClick={toggleMenu} size={30} className="text-black dark:text-white cursor-pointer" /> : <IoMdMenu onClick={toggleMenu} size={30} className="text-black dark:text-white cursor-pointer" />
        }


        <div className="text-black font-sans dark:text-white font-bold">Irfan khan</div>
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="p-2 rounded transition-colors duration-300"
        >
          {darkMode ? (
            <MdDarkMode size={30} className="text-white cursor-pointer" />
          ) : (
            <MdDarkMode size={30} className="text-black dark:text-white cursor-pointer" />
          )}
        </button>


      </div>
      <div className="absolute top-12 w-100  h-[80vh] flex text-black flex-col items-center overflow-hidden rounded-b justify-around gap-4 "
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div
          ref={menu}
          className="absolute  w-100 h-[80vh] flex pt-15  text-black flex-col items-center overflow-hidden justify-around gap-4 bg-white/70 backdrop-blur-lg"
        >
          <div className="text-2xl flex flex-col gap-4 font-semibold">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Portal</div>
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer">Blog</div>
          </div>
          <div className="flex flex-row gap-4 text-xl">
            <a href="github">
              <FiGithub />
            </a>
            <a href="facebook">
              <FiFacebook />
            </a>
            <a href="linkedin">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
