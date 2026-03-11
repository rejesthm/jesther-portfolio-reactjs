import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    date: "2022 – Present",
    role: "Senior Software Engineer",
    company: "Tech Company Inc.",
    location: "Remote",
    description:
      "Leading development of customer-facing web applications. Architecting scalable solutions and mentoring junior developers.",
  },
  {
    date: "2019 – 2022",
    role: "Full Stack Developer",
    company: "Startup Labs",
    location: "San Francisco, CA",
    description:
      "Built and maintained multiple product features using React and Node.js. Collaborated with design and product teams.",
  },
  {
    date: "2017 – 2019",
    role: "Junior Developer",
    company: "Digital Agency",
    location: "New York, NY",
    description:
      "Developed responsive websites and web applications for clients across various industries.",
  },
];

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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Experience
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            My professional journey and the roles that shaped my expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                variants={itemVariants}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 w-4 h-4 rounded-full bg-[#3B82F6] border-4 border-[#FAFAFA] shadow top-1" />
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-semibold text-[#3B82F6] mb-1">
                    {exp.date}
                  </p>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-[#6B7280] font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280] mb-3">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
