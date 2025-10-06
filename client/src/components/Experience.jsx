import { GiCrossedSabres } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { GiDuration } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Experience() {


    const Experience = [
        {
            Title:"Full-Stack Developer Intern",
            Company: "CodeForge Solutions",
            Duration: "Jan 2021 – Jun 2021",
            Location: "Remote",
            description:"i am irfan kah i am irfan kah am irfan kahnam iri am irfan kah i am irfan kah am irfan kahnam irfan kahfan kahn ",
        },
        {
            Title:"Full-Stack Developer Intern",
            Company: "CodeForge Solutions",
            Duration: "Jan 2021 – Jun 2021",
            Location: "Remote",
            description:"i am irfan kah i am irfan kah am irfan kahnam iri am irfan kah i am irfan kah am irfan kahnam irfan kahfan kahn ",
        },
    ]
    return (
        <section className="relative  h-auto w-screen px-6 md:px-20 py-12 flex flex-col gap-10">
  <h1 className="text-4xl text-black font-bold text-center">Experience</h1>

  <div className="flex flex-col gap-8">
    {Experience.map((exp, index) => (
      <div
        key={index}
        className="flex flex-col gap-4 bg-white/70 backdrop-blur-lg shadow-sm rounded-xl p-6 md:p-8"
      >
        <div className="flex items-center gap-4">
          <GiCrossedSabres className=" text-2xl" />
          <h3 className="text-xl font-semibold text-gray-900">{exp.Title}</h3>
        </div>

        <div className="flex items-center gap-4">
          <IoMdBusiness className=" text-2xl" />  
          <p className="text-gray-700">{exp.Company}</p>
        </div>

        <div className="flex items-center gap-4">
          <GiDuration className=" text-2xl" />
          <p className="text-gray-700">{exp.Duration}</p>
        </div>

        <div className="flex items-center gap-4">
          <CiLocationOn className=" text-2xl" />
          <p className="text-gray-700">{exp.Location}</p>
        </div>

        <div className="flex  items-start gap-4">
          <MdOutlineDescription  className=" text-2xl" />
          <p className="text-gray-700 leading-relaxed break-all">
            {exp.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    )
}