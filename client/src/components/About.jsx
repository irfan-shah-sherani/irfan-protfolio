import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type'; 

export default function About() {
  const about = useRef();
  const parRef = useRef();
  useGSAP(() => {
    gsap.from(about.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: about.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  useGSAP(() => {
    if (!parRef.current) return;

    const split = new SplitType(parRef.current, { 
      types: 'chars',
      tagName: 'span'
    });

    parRef.current.classList.add('char-highlight-parent');


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parRef.current,
        start: 'top 90%', 
        end: 'bottom 60%', 
        scrub: 1,
  
      },
    });


    tl.to(split.chars, {
      duration: 0.1, 
      backgroundSize: '100% 100%',
      color: '#e4e4e4ff',
      stagger: 0.01, 
      ease: 'none',
    });


  }, { scope: parRef }); 
  return (
    <section className="flex relative z-[100] justify-center bg-black md:px-50 px-10  h-screen w-screen overflow-y-hidden flex-col gap-3 text-white">
      <h1 ref={about} className="text-4xl font-bold">
        About
      </h1>
      <div className="flex flex-row justify-around gap-4 items-baseline">
        <div className="w-50 top-10 bg-amber-400 h-1 "></div>
        <p ref={parRef} className="text-3xl text-black  opacity-40 ">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, quae! Enim ex quis voluptatum soluta repudiandae iure? Illum
          recusandae quibusdam harum incidunt, ipsa asperiores exercitationem
          Enim ex quis voluptatum soluta repudiandae iure? Illum
          recusandae quibusdam harum incidunt, ipsa asperiores exercitationem
        </p>
      </div>
    </section>
  );
}
