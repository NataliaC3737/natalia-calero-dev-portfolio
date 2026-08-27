import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useMouseSpring(
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
