import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Yash Sahu",
    role: "Software Engineer at HCL Technologies",
    image: "/testimonials/yash.jpg",
    text: "Gaurav is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him.",
  },
  {
    name: "Heather Forster",
    role: "UI/UX Designer at PixelWorks",
    image: "/testimonials/heather.jpg",
    text: "Working with Gaurav was an absolute pleasure. He brings design and code together like magic. Highly recommend him!",
  },
  {
    name: "Amy Jacobsson",
    role: "Tech Manager at CodeEmpire",
    image: "/testimonials/amy.jpg",
    text: "From concept to execution, Gaurav handled everything flawlessly. His work ethic and innovation are unmatched.",
  },
  {
    name: "Carry Smith",
    role: "CTO at Innovate Labs",
    image: "/testimonials/carry.jpg",
    text: "Gaurav transformed our outdated platform into something modern and powerful. His skills are world-class.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0b0e12] text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-14 tracking-wide">
        What People Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="
              bg-[#111418]/70 
              backdrop-blur-xl 
              border border-white/10 
              rounded-2xl 
              p-8 
              shadow-[0_0_25px_rgba(0,0,0,0.3)]
              hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={item.image}
                className="w-20 h-20 rounded-full object-cover border border-white/20 mb-4"
              />

              <p className="text-gray-300 text-[15px] italic mb-5 leading-relaxed">
                “{item.text}”
              </p>

              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
