import { useRef,useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Navebar from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import SKill from "./components/Skill"
import Profile from "./components/Profile"
import Experience from "./components/Experience"
import Testtimonail from "./components/Testimonail"
import Contact from "./components/Contact"
import Chat from "./components/Chat"
import { useGSAP } from "@gsap/react"
import Footer from "./components/Footer"

export default function App(){

const heroRef = useRef();
const aboutRef = useRef();



useGSAP(() => {
  gsap.to(heroRef.current, {
    scrollTrigger: {
      trigger: heroRef.current,
      start: "0% 0%",
      pin: true,
      end: "+=100%",
      pinSpacing: false,
    },
     zIndex: 0,
  });
});


  return (
    <div className="border-4 bg-gray-200 border-amber-300 overflow-y-hidden scrollbar-hide">
      <Navebar/>
      <Hero innerRef={heroRef} />
      <About/>
      <SKill/>
      <Profile/>
      <Experience/>
      <Testtimonail/>
      <Contact/>
      <Footer/>
      <Chat/>
    </div>
  )
}
