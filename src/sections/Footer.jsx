import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0a0d10] text-white py-12 mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >

        <h2 className="text-4xl font-bold mb-2">Ashhar Kaunain Khan</h2>

    
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

     
        <div className="flex items-center justify-center gap-6 mb-6 text-2xl">
          <a
            href="https://x.com/_ImaKkhan"
            className="hover:text-blue-400 transition duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://in.linkedin.com/in/ashhar-kaunain-khan"
            className="hover:text-blue-400 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/imAKkhan"
            className="hover:text-blue-400 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

     
        <p className="text-gray-400 italic mb-4">
          “Success is when preparation meets opportunity.”
        </p>

    
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ashhar Kaunain Khan. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
