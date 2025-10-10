import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function Testtimonail() {

  const left = useRef()
  const right = useRef()

  useGSAP(() => {
    gsap.from(left.current.children, {
      x: -200,
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: left.current,
        start: "top 80%",
      }
    })
    gsap.from(right.current, {
      x: 200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: left.current,
        start: "top 80%",
      }
    })
  })


  return (
    <section className="flex flex-col md:flex-row md:px-40 px-5 py-10 md:py-0 h-auto md:h-screen justify-between items-center gap-8">
      <div
        ref={left}
        className="text-black gap-6 flex flex-col w-full md:w-4/6"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold  dark:text-white">Testimonial</h1>

        <div className="flex flex-row items-start md:items-baseline gap-4">
          <div className="w-16 md:w-20 h-1 bg-amber-300 flex-shrink-0"></div>

          <div className="flex flex-col gap-2  dark:text-white">
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ullam voluptatem quam voluptate soluta in praesentium officia alias
              fuga at. Error expedita officia alias, est explicabo tempore deserunt
              unde nobis!
            </p>
            <h2 className="text-lg md:text-2xl font-bold">Irfan Khan</h2>
            <h3 className="text-xs md:text-sm">CEO | Founder</h3>
          </div>
        </div>
      </div>

      <div
        ref={right}
        className="bg-amber-400 rounded-md w-full md:w-1/3 h-60 md:h-80 overflow-hidden"
      >
        <img
          className="object-cover object-top  w-full h-full"
          src="/BackB.png"
          alt="Profile"
        />
      </div>
    </section>

  );
}
