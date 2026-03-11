import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import FloatingElements from "./FloatingElements";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const handleViewProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F3F4F6] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#3B82F6]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Software Engineer
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] bg-clip-text text-transparent">
                Your Name
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#6B7280] max-w-xl mb-8 leading-relaxed"
            >
              I build exceptional digital experiences with clean code and modern
              technologies. Specializing in full-stack development and creating
              solutions that make a difference.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 transition-shadow"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleContact}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
              >
                Contact Me
                <Mail className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <FloatingElements />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
