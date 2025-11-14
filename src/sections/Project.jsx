import { motion } from "framer-motion";

export default function MyWork() {
  return (
    <section className="w-full text-black">

      {/* ---------------- BANKING SYSTEM PROJECT ---------------- */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] px-6 py-16">

        {/* Top Section */}
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-extrabold text-gray-900"
          >
            Banking System
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl font-semibold text-gray-800"
          >
            My Work
          </motion.h2>
        </div>

        {/* Project Card */}
        <div className="max-w-6xl mx-auto mt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.20)] bg-white"
          >
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img
                src="https://www.shutterstock.com/image-photo/open-banking-financial-technology-fintech-260nw-1348453070.jpg"
                className="w-full h-[460px] object-cover rounded-3xl"
                alt="Banking Project"
              />

              {/* Text inside image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-16 left-16"
              >
                {/* Blue → Purple Gradient Title */}
                <h3 className="text-4xl font-extrabold leading-tight 
                bg-gradient-to-r from-[#00aaff] via-[#5f4bff] to-[#b400ff]
                text-transparent bg-clip-text
                drop-shadow-[0_0_18px_rgba(120,80,255,0.55)]">
                  Smart Secure <br />
                  Modern Banking <br />
                  System
                </h3>

                <p className="mt-4 text-sm max-w-sm opacity-90 text-white">
                  Account creation • Secure login • Money transfer •
                  Transaction history • Real-time updates
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/imAKkhan/BankingSystem"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <button className="mt-8 bg-gray-900 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:scale-110 transition-all">
              View Project
            </button>
          </motion.a>
        </div>
      </section>



      {/* ---------------- STUDENT ATTENDANCE SYSTEM PROJECT ---------------- */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#d9ffe8] to-[#b0f5c8] px-6 py-16">

        {/* Top Section */}
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-gray-900"
          >
            Student Attendance System
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl font-semibold text-gray-800"
          >
            My Work
          </motion.h2>
        </div>

        {/* Project Card */}
        <div className="max-w-6xl mx-auto mt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.20)] bg-white"
          >
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img
                src="https://flowhcm.com/wp-content/uploads/2023/11/flowhcm-attendance-system-with-biometric-device.jpg"
                className="w-full h-[460px] object-cover rounded-3xl"
                alt="Attendance System"
              />

              {/* Text inside image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-16 left-16"
              >
                {/* 💚 GREEN GRADIENT TITLE */}
                <h3 className="text-4xl font-extrabold leading-tight 
                bg-gradient-to-r from-[#00ff9d] via-[#00d86c] to-[#009944]
                text-transparent bg-clip-text
                drop-shadow-[0_0_18px_rgba(0,255,140,0.55)]">
                  Smart Biometric <br />
                  Attendance Tracking <br />
                  System
                </h3>

                <p className="mt-4 text-sm max-w-sm opacity-90 text-white">
                  Biometric check-in • Real-time records • Analytics dashboard •
                  Teacher panel • Cloud backup
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/imAKkhan/StudentAttendanceSystem"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <button className="mt-8 bg-gray-900 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:scale-110 transition-all">
              View Project
            </button>
          </motion.a>
        </div>
      </section>

    </section>
  );
}
