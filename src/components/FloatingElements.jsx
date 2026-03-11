import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Database, Smartphone } from "lucide-react";

const floatingItems = [
  {
    icon: Code2,
    label: "Code",
    className: "top-[10%] left-[5%] w-14 h-14",
    delay: 0,
    duration: 4,
    yOffset: [-8, 8, -8],
    rotateOffset: [-2, 2, -2],
  },
  {
    icon: Cpu,
    label: "Tech",
    className: "top-[25%] right-[10%] w-12 h-12",
    delay: 0.5,
    duration: 5,
    yOffset: [-12, 12, -12],
    rotateOffset: [1, -1, 1],
  },
  {
    icon: Database,
    label: "Data",
    className: "bottom-[30%] left-[15%] w-10 h-10",
    delay: 1,
    duration: 4.5,
    yOffset: [-10, 10, -10],
    rotateOffset: [-1.5, 1.5, -1.5],
  },
  {
    icon: Code2,
    label: "React",
    className: "bottom-[15%] right-[20%] w-11 h-11",
    delay: 0.3,
    duration: 3.5,
    yOffset: [-6, 6, -6],
    rotateOffset: [2, -2, 2],
  },
];

function FloatingCard({ item, parallaxY, reducedMotion }) {
  const Icon = item.icon;
  return (
    <motion.div
      className={`absolute ${item.className} flex items-center justify-center rounded-xl bg-white shadow-lg shadow-gray-200/50 border border-gray-100`}
      style={reducedMotion ? undefined : { y: parallaxY }}
      animate={
        reducedMotion
          ? {}
          : {
              y: item.yOffset,
              rotate: item.rotateOffset,
            }
      }
      transition={
        reducedMotion
          ? {}
          : {
              duration: item.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: item.delay,
            }
      }
      whileHover={{ scale: 1.1, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
    >
      <Icon className="w-6 h-6 text-[#3B82F6]" />
    </motion.div>
  );
}

export default function FloatingElements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const parallaxY4 = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const mockupY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const parallaxValues = [parallaxY1, parallaxY2, parallaxY3, parallaxY4];

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] lg:h-[500px] min-h-[350px]">
      {/* Phone/UI mockup */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={
          reducedMotion ? undefined : { y: mockupY, opacity: mockupOpacity }
        }
      >
        <motion.div
          className="relative w-[200px] sm:w-[240px] lg:w-[280px] rounded-[2.5rem] p-2 bg-gradient-to-b from-gray-200 to-gray-300 shadow-xl"
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -8, 0],
                  rotate: [0, 1, 0],
                }
          }
          transition={
            reducedMotion
              ? {}
              : {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
          }
        >
          <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19] border border-gray-200">
            <div className="h-full bg-gradient-to-b from-[#3B82F6]/10 to-[#3B82F6]/5 flex items-center justify-center p-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <p className="text-xs text-[#6B7280] font-medium">Portfolio</p>
                <p className="text-[10px] text-[#6B7280]">App Preview</p>
              </div>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating cards */}
      {floatingItems.map((item, i) => (
        <FloatingCard
          key={i}
          item={item}
          parallaxY={parallaxValues[i]}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}
