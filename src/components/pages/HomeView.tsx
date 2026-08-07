"use client";
import Button from "@/components/atoms/Button/Button";
import SectionLayout from "@/components/templates/sections/SectionLayout";
import { useLanguage } from "@/context/hooks/useLanguage";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function useMouseSpring(
  stiffness: number,
  damping: number,
  rangeX: number,
  rangeY: number,
) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });
  const x = useTransform(springX, [0, 1], [-rangeX, rangeX]);
  const y = useTransform(springY, [0, 1], [-rangeY, rangeY]);
  return { x, y };
}

const stars = [
  { x: 72, y: 12, size: 1.5, delay: 0 },
  { x: 88, y: 8, size: 1, delay: 1.5 },
  { x: 78, y: 85, size: 1.2, delay: 3 },
  { x: 92, y: 78, size: 0.8, delay: 4.5 },
  { x: 65, y: 65, size: 1, delay: 2 },
  { x: 85, y: 40, size: 0.7, delay: 5 },
];

export default function HomeView() {
  const { translations } = useLanguage();

  // Planet
  const planetSpring = useMouseSpring(120, 25, 4, 3);
  const glowSpring = useMouseSpring(80, 20, 8, 6);

  // Ring orbit
  const orbitX = useMotionValue(0.5);
  const orbitY = useMotionValue(0.5);
  const orbitSpringX = useSpring(orbitX, { stiffness: 40, damping: 18 });
  const orbitSpringY = useSpring(orbitY, { stiffness: 40, damping: 18 });
  const orbitOffsetX = useTransform(orbitSpringX, [0, 1], [-25, 25]);
  const orbitOffsetY = useTransform(orbitSpringY, [0, 1], [-18, 18]);

  // Ring rotations
  const tiltX = useMotionValue(0.5);
  const tiltSpring = useSpring(tiltX, { stiffness: 55, damping: 14 });
  const ringAngle = useTransform(tiltSpring, [0, 1], [-8, 8]);
  const ringAngle2 = useTransform(tiltSpring, [0, 1], [22, 38]);

  // Planet band shift
  const bandX = useMotionValue(0.5);
  const bandY = useMotionValue(0.5);
  const bandShift = useTransform(
    useSpring(bandX, { stiffness: 85, damping: 10 }),
    [0, 1],
    [-10, 10],
  );
  const bandTilt = useTransform(
    useSpring(bandY, { stiffness: 85, damping: 10 }),
    [0, 1],
    [-2, 2],
  );

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      orbitX.set(x);
      orbitY.set(y);
      tiltX.set(x);
      bandX.set(x);
      bandY.set(y);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [orbitX, orbitY, tiltX, bandX, bandY]);

  return (
    <SectionLayout>
      <div className="fixed inset-0 bg-linear-to-br from-primary/8 via-background to-secondary/4 pointer-events-none" />

      <div className="fixed right-0 top-0 h-full w-[45%] pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          {stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-brown-muted"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
              }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: s.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full h-[85%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 35% 50%, rgba(217,107,40,0.25), rgba(184,86,30,0.08) 35%, rgba(217,107,40,0.03) 55%, transparent 75%)",
            filter: "blur(70px)",
            x: glowSpring.x,
            y: glowSpring.y,
          }}
        />

        <motion.div
          className="absolute right-[-5%] top-[35%] -translate-y-1/2 w-[70%] h-[55%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(217,107,40,0.2), rgba(106,69,50,0.08) 30%, transparent 60%)",
            filter: "blur(60px)",
            x: glowSpring.x,
            y: glowSpring.y,
          }}
          animate={{ scale: [1, 1.04, 0.97, 1.03, 1] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{ x: orbitOffsetX, y: orbitOffsetY }}
        >
          <motion.svg
            className="absolute right-0 top-0 w-full h-full"
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid meet"
            style={{ rotate: ringAngle }}
          >
            <defs>
              <linearGradient id="ringA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d96b28" stopOpacity={0} />
                <stop offset="25%" stopColor="#d96b28" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#d96b28" stopOpacity={0.9} />
                <stop offset="75%" stopColor="#d96b28" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6a4532" stopOpacity={0} />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 270 A 150 55 0 0 0 350 270 A 150 55 0 0 0 50 270"
              fill="none"
              stroke="url(#ringA)"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
          </motion.svg>

          <motion.svg
            className="absolute right-0 top-0 w-full h-full"
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid meet"
            style={{ rotate: ringAngle2 }}
          >
            <defs>
              <linearGradient id="ringB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d96b28" stopOpacity={0} />
                <stop offset="25%" stopColor="#d96b28" stopOpacity={0.5} />
                <stop offset="50%" stopColor="#d96b28" stopOpacity={0.7} />
                <stop offset="75%" stopColor="#d96b28" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#6a4532" stopOpacity={0} />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 270 A 150 55 0 0 0 350 270 A 150 55 0 0 0 50 270"
              fill="none"
              stroke="url(#ringB)"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full"
          style={{ x: planetSpring.x, y: planetSpring.y }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 35% 40%, rgba(217,107,40,0.3), rgba(184,86,30,0.12) 30%, rgba(106,69,50,0.06) 55%, rgba(89,56,37,0.02) 80%)",
              filter: "blur(8px)",
            }}
          />
          <motion.div
            className="absolute inset-[5%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 35%, rgba(217,107,40,0.2), rgba(184,86,30,0.08) 35%, transparent 60%)",
              filter: "blur(4px)",
            }}
          />
          <motion.div
            className="absolute inset-[15%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 25% 30%, rgba(217,107,40,0.12), transparent 50%)",
              filter: "blur(6px)",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 70% 60%, rgba(89,56,37,0.1) 0%, transparent 50%)",
              filter: "blur(6px)",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, transparent 20%, rgba(217,107,40,0.08) 28%, transparent 35%, rgba(184,86,30,0.05) 45%, transparent 52%, rgba(106,69,50,0.06) 60%, transparent 68%, rgba(217,107,40,0.04) 75%, transparent 85%)",
              x: bandShift,
              rotate: bandTilt,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(217,107,40,0.08) 30%, transparent 60%)",
            filter: "blur(30px)",
            x: planetSpring.x,
            y: planetSpring.y,
          }}
        />
      </div>

      <motion.div
        className="flex items-center min-h-[70vh] relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-6 max-w-3xl relative">
          <motion.p
            className="text-lg text-brown-muted font-afacad tracking-wide uppercase"
            variants={itemVariants}
          >
            {(translations as any).home.greeting}
          </motion.p>
          <motion.h1
            className="text-6xl lg:text-7xl text-brown-dark font-bagel-fat-one leading-tight"
            variants={itemVariants}
          >
            Natalia Calero
            <span className="bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent">
              .
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl lg:text-3xl text-brown-coffee font-afacad font-light leading-relaxed"
            variants={itemVariants}
          >
            {(translations as any).home.role}
          </motion.p>
          <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
            <Button variant="gradient" goTo="/contact" isLink>
              {(translations as any).home.getInTouch}
            </Button>
            <Button variant="outlined">
              {(translations as any).home.downloadResume}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
