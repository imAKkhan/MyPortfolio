import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const c1 = useRef(null);
  const v1 = useInView(c1, { margin: "-25% 0px -25% 0px" });

  const cardAnim = {
    hidden: { opacity: 0, y: 120, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section className="relative min-h-screen text-white px-6 py-28 overflow-hidden">

    
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#111827] to-[#0a1a2f] animate-gradientMove"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>

   
      <div className="relative z-10">

     
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-bold mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">

         
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] bg-gray-700 rounded-full"></div>

          <motion.div
            animate={{
              height: v1 ? "100%" : "0%",
            }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[4px] bg-blue-400 rounded-full shadow-[0_0_25px_#60a5fa]"
          />

         
          <div ref={c1} className="flex flex-col items-center relative mb-40">

           
            <motion.div
              animate={v1 ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-7 h-7 bg-blue-400 rounded-full shadow-[0_0_25px_#60a5fa] absolute left-1/2 -translate-x-1/2 top-[-12px]"
            />

          
            <motion.div
              variants={cardAnim}
              initial="hidden"
              animate={v1 ? "visible" : "hidden"}
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl w-full shadow-[0_0_30px_rgba(255,255,255,0.06)]"
            >
              <h3 className="text-3xl font-bold text-blue-300">Frontend Intern</h3>
              <p className="text-gray-400">Aarvy Technology • 2024</p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Built clean and responsive UI, optimized user experience,
                improved application flow, and worked with modern frontend
                technologies like React, Tailwind, and JavaScript.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
