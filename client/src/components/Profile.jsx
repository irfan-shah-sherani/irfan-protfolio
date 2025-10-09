import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  const [profiles] = useState([
    { id: 1, title: "Profile of video as BackB", img: "1.png" },
    { id: 2, title: "Profile of a editor BackB", img: "1.png" },
    { id: 3, title: "S of video editor BackC", img: "1.png" },
  ]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const scroller = scrollerRef.current;
      if (!section || !scroller) return;

      const cards = scroller.children;
      const cardWidth =
        cards[0].offsetWidth +
        parseFloat(getComputedStyle(cards[0]).marginRight);

      const totalScroll = cardWidth * (cards.length - 1);

      gsap.to(scroller, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 15%",
          end: () => "+=" + totalScroll,
          pin: true,
          scrub: 0.4,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" absoulute overflow-hidden"
    >
      <div
        ref={scrollerRef}
        className="flex items-center h-full  gap-6 px-6 lg:px-12"
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col gap-4 justify-start items-center shrink-0 w-full sm:min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] rounded-md"
          >
            <div className="w-250 h-130 rounded-lg">
              <img
                src={`/projects/${profile.img}`}
                alt={profile.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-black dark:text-white font-bold text-lg sm:text-xl lg:text-2xl text-center">
              {profile.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
