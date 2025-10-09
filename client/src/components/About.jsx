import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef();
  const parRef = useRef();

  useGSAP(() => {
    // Animate heading
    gsap.from(aboutRef.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    if (parRef.current) {
      const split = new SplitType(parRef.current, { types: "chars" });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: parRef.current,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
        duration: 0.1,
        color: "#fafafaff",
        stagger: 100,
        ease: "elastic.out(1,0.3)",
      });
    }
  }, []);

  return (
    <section className="flex relative z-[100] justify-center bg-black md:px-50 px-10 dark:bg-gray-900 h-screen overflow-y-hidden flex-col gap-3 text-white">
      <h1 ref={aboutRef} className="text-4xl font-bold">
        About
      </h1>
      <div className="flex flex-row justify-around gap-4 items-baseline word-break">
        <div className="w-50 top-10 bg-amber-400 h-1"></div>
        <p ref={parRef} className="text-3xl text-gray-700 dark:text-white">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          quae! Enim ex quis voluptatum soluta repudiandae iure? Illum recusandae
          quibusdam harum incidunt, ipsa asperiores exercitationem Enim ex quis
          voluptatum soluta repudiandae iure? Illum recusandae quibusdam harum
          incidunt, ipsa asperiores exercitationem
        </p>
      </div>
    </section>
  );
}
