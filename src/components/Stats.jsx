import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Layers, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: FolderGit2,
    value: "20+",
    label: "Projects Built",
  },
  {
    icon: Layers,
    value: "15+",
    label: "Technologies Used",
  },
  {
    icon: Users,
    value: "10+",
    label: "Clients / Users",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Stats() {
  return (
    <section id="stats" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-[#FAFAFA] rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[#6B7280] font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
