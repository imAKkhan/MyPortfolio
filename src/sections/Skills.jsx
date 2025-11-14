import { DiCss3, DiJavascript, DiMysql } from "react-icons/di";
import { FaJava, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiHtml5, SiSpringboot } from "react-icons/si";

export default function SkillsSlider() {
  return (
    <div className="w-full overflow-hidden py-10 bg-[#0a0d10] relative">

      {/* Inline Animation */}
      <style>
        {`
          @keyframes marqueeLeftToRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee {
            animation: marqueeLeftToRight 15s linear infinite;
          }
        `}
      </style>

      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 mb-3 font-bold text-transparent bg-clip-text
bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
>
        My Skills
      </h2>

      {/* 👉 Centered Paragraph */}
      <p className="text-center  mb-10">
        Modern Application || Modern Technology
      </p>

      {/* MAIN SCROLL WRAPPER */}
      <div className="overflow-hidden w-full">
        <div className="flex marquee whitespace-nowrap">

          {/* 💡 Two copies of all icons → seamless infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8">

              {/* Java */}
              <div className="flex flex-col items-center">
                <FaJava className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">Java</p>
              </div>

              {/* Spring Boot */}
              <div className="flex flex-col items-center">
                <SiSpringboot className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">Spring Boot</p>
              </div>

              {/* React */}
              <div className="flex flex-col items-center">
                <FaReact className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">React</p>
              </div>

              {/* HTML */}
              <div className="flex flex-col items-center">
                <SiHtml5 className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">HTML</p>
              </div>

              {/* MySQL */}
              <div className="flex flex-col items-center">
                <DiMysql className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">MySQL</p>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center">
                <DiJavascript className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">JavaScript</p>
              </div>

              {/* CSS */}
              <div className="flex flex-col items-center">
                <DiCss3 className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">CSS</p>
              </div>

              {/* Next.js */}
              <div className="flex flex-col items-center">
                <RiNextjsFill className="text-6xl text-teal-400" />
                <p className="mt-2 text-teal-300 text-lg">Next.js</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
