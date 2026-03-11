import { motion } from "framer-motion";
import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { Cloud } from "lucide-react";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function TechStack() {
  return (
    <section id="tech" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Tech Stack
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -8 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#FAFAFA] border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#3B82F6]/20 transition-all min-w-[120px]"
              >
                <Icon
                  className="w-12 h-12 lg:w-14 lg:h-14"
                  style={{ color: tech.color }}
                />
                <span className="text-sm font-semibold text-[#1A1A1A]">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
