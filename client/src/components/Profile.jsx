
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const scroller = scrollerRef.current;
      if (!section || !scroller) return;

      let getScrollDistance = () => scroller.scrollWidth - window.innerWidth;

      gsap.to(scroller, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + getScrollDistance(),
          pin: true,
          scrub: 0,
          invalidateOnRefresh: true,
        //   markers: true, // debug only
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden bg-white"
    >
      <div
        ref={scrollerRef}
        className="flex items-center h-full gap-2 px-8"
      >
        <div className="w-full lg:min-w-[80vw] h-auto lg:h-full flex flex-col gap-4 justify-center items-center shrink-0 rounded-md">
      <div className="w-full lg:w-5xl h-48 lg:h-120 bg-red-300">1</div>
      <h1 className="font-bold text-xl lg:text-2xl text-center">Profile of video editor</h1>
    </div>

    {/* Card 2 */}
    <div className="w-full lg:min-w-[80vw] h-auto lg:h-full flex flex-col gap-4 justify-center items-center shrink-0 rounded-md">
      <div className="w-full lg:w-5xl h-48 lg:h-120 bg-red-300">2</div>
      <h1 className="font-bold text-xl lg:text-2xl text-center">Profile of video editor</h1>
    </div>

    {/* Card 3 */}
    <div className="w-full lg:min-w-[80vw] h-auto lg:h-full flex flex-col gap-4 justify-center items-center shrink-0 rounded-md">
      <div className="w-full lg:w-5xl h-48 lg:h-120 bg-red-300">3</div>
      <h1 className="font-bold text-xl lg:text-2xl text-center">Profile of video editor</h1>
    </div>

    {/* Card 4 */}
    <div className="w-full lg:min-w-[80vw] h-auto lg:h-full flex flex-col gap-4 justify-center items-center shrink-0 rounded-md">
      <div className="w-full lg:w-5xl h-48 lg:h-120 bg-red-300">4</div>
      <h1 className="font-bold text-xl lg:text-2xl text-center">Profile of video editor</h1>
    </div>
        
      </div>
    </section>
  );
}
