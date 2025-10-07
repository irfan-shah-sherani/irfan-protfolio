import { useRef} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Hero({innerRef}) {
  const left = useRef();
  const right = useRef();


   useGSAP(() => {
      gsap.from(
        right.current,
        { x: 200,
           opacity: 0,
          duration: 1,
        },
      );
    }, []);

   useGSAP(() => {
      gsap.from(
        left.current.children,
        { x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.4,
        },
      );
    }, []);

  return (
    <section ref={innerRef} className="flex  items-center justify-around px-10 py-24 flex-col md:flex-row h-screen">
 
      <div ref={left} className="dark:text-white text:black flex flex-col  gap-0 relative z-2">
        <div   className="text-3xl font-bold">
          I am {" "}
          <span className="dark:text-white text:black font-bold">
             Irfan Khan
          </span>
        </div>
        <div className="text">Full Stack web dev</div>
        <div className="py-10">
          <button className="bg-amber-400 dark:text-white text:black px-6 py-3 rounded hover:bg-amber-500 transition">
            Contact Me
          </button>
        </div>
      </div>  

      <div ref={right} className="bg-amber-400 rounded-full h-[400px] w-[400px] overflow-hidden">
        <img 
          className="w-full h-full object-cover"
          src="BackC.png"
          alt="profile"
        />
      </div>
    </section>
  );
}
