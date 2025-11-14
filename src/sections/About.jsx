import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0f10] text-white flex items-center justify-center px-10 py-20">

      <div className="max-w-5xl w-full space-y-12">

        {/* PROFILE + RIGHT SIDE CONTENT */}
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* PROFILE LEFT */}
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 rounded-2xl object-cover shadow-[0_0_40px_rgba(0,255,140,0.4)] border border-[#1f1f1f]"
          />

          {/* RIGHT SIDE: NAME + ROLE + DESCRIPTION + CARDS + BUTTONS */}
          <div className="space-y-6">

            {/* NAME + ROLE */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                text-transparent bg-clip-text bg-gradient-to-r 
                from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              >
                Ashhar Kaunain Khan
              </h1>

              <p className="text-gray-300 text-xl mt-2 font-semibold">
                Full Stack Developer • Java Developer
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[16px] leading-relaxed max-w-3xl">
              I build modern, scalable applications with a strong focus on clean 
              architecture, smooth interfaces, and high performance. I specialize in 
              Java, Spring Boot, React, and user-friendly UI/UX design.
            </p>

            {/* CARDS BELOW (GLASS EFFECT) */}
            <div className="flex flex-wrap gap-4 width-5">

              <div className="backdrop-blur-xl bg-white/5 border border-white/20 px-6 py-4 rounded-2xl w-44 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <p className="text-gray-300 text-sm">Specialty</p>
                <h3 className="text-xl font-semibold mt-1">Full Stack</h3>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/20 px-6 py-4 rounded-2xl w-44 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <p className="text-gray-300 text-sm">Focus</p>
                <h3 className="text-xl font-semibold mt-1">Java Developer</h3>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/20 px-6 py-4 rounded-2xl w-44 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <p className="text-gray-300 text-sm">UI/UX</p>
                <h3 className="text-xl font-semibold mt-1">Design + Frontend</h3>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold shadow-md hover:opacity-90 transition">
                View Projects
              </button>

              <button className="px-8 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 text-white font-semibold shadow-md hover:bg-[#222] transition">
                Get in Touch
              </button>
            </div>

          </div>
        </div>
{/* ABOUT ME AT BOTTOM */} <div className="pt-6 border-t border-white/10"> <h2 className="text-3xl font-bold mb-2">About Me</h2> <p className="text-gray-400 leading-relaxed text-[15px] max-w-3xl"> I'm a passionate developer who loves building fast, beautiful, and user-centered applications. I focus on writing clean code, solving real problems, and delivering polished digital experiences. </p> </div>
      </div>

    </div>
  );
}
