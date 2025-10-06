import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {gsap} from "gsap";
import { FaFacebook, FaTwitter, FaReact } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Skill() {

  const skill = useRef()

  const skills = [
    { Icone: FaFacebook, name: "Facebook" },
    { Icone: FaTwitter,  name: "Twitter" },
    { Icone: FaReact,    name: "React" },
    { Icone: FaFacebook, name: "Facebook" },
    { Icone: FaTwitter,  name: "Twitter" },
    { Icone: FaTwitter,  name: "Twitter" },
    { Icone: FaTwitter,  name: "Twitter" },
    { Icone: FaTwitter,  name: "Twitter" },
  ];

useGSAP(() => {
  gsap.from(skill.current.children, {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger:0.2,  
    scrollTrigger: {
      trigger: skill.current, 
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}, []);

  return (
    <section className="h-auto md:px-20 px5 flex flex-col justify-center py-20 items-center   gap-10">
      <h1 className="text-3xl text-black text-center font-bold ">My Skills</h1>
      <div ref={skill} className="flex flex-wrap justify-center gap-10 ">
        {skills.map((skill, index) => {
          const Icon = skill.Icone; 
          return (
            <div 
              key={index}
              className="h-40 w-40 cursor-pointer hover:shadow-[0_0_20px_0_rgba(59,130,246,0.7)] transition-shadow duration-400  flex flex-col justify-center items-center bg-white/70 backdrop-blur-2xl rounded-lg shadow-lg"
            >
              <Icon className="text-5xl text-blue-400 mb-4 " />
              <span className="text-black text-lg">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
