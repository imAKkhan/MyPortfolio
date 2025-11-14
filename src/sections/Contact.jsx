import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Astra from "../assets/Astra.png";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b1n93ah",      // ✔ EmailJS Service ID
        "template_n6ll9vc",     // ✔ EmailJS Template ID
        formRef.current,
        "jy-wlg6T4oLmr5xRj"     // ✔ EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("Something went wrong ❌ Try again");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0d10] text-white flex flex-col justify-center py-20"
    >
      <Toaster position="top-center" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

        {/* LEFT SIDE — ANIMATED ASTRONAUT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.img
            src={Astra}
            alt="astronaut"
            className="w-full max-w-[650px] drop-shadow-[0_0_35px_rgba(0,112,255,0.7)]"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111418]/80 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-gray-800 hover:border-blue-600 transition"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Let’s Work Together</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm">Your Name *</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl bg-[#0d1012] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Your Email *</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-xl bg-[#0d1012] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Service Needed *</label>
              <select
                name="service_needed"
                required
                className="w-full p-3 rounded-xl bg-[#0d1012] border border-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="">Something in mind?</option>
                <option>Portfolio Website</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>Full Stack Project</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Explain Your Idea *</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Explain your idea..."
                required
                className="w-full p-3 rounded-xl bg-[#0d1012] border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              disabled={loading}
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold shadow-lg disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
