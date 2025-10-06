import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const about = useRef();
  useGSAP(() => {
    gsap.from(about.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: about.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section className="flex relative z-[100] justify-center bg-black md:px-40 px-10 border h-screen flex-col gap-3 text-white">
      <h1 ref={about} className="text-3xl font-bold">
        About
      </h1>
      <div className="flex flex-row justify-around gap-4 items-baseline">
        <div className="w-50 top-10 bg-amber-400 h-1"></div>
        <p className="text-xl">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, quae! Enim ex quis voluptatum soluta repudiandae iure? Illum
          recusandae quibusdam harum incidunt, ipsa asperiores exercitationem
          qui corrupti voluptatibus aperiam maiores? ipsum dolor sit amet,
          consectetur adipisicing elit. Culpa reprehenderit nostrum, porro qui
          distinctio omnis blanditiis quo velit laudantium aliquid nam, saepe
          animi illo provident! Itaque nulla accusantium sit alias.
        </p>
      </div>
    </section>
  );
}
