import { calc, motionVars, rtsc, varOf } from "@utils/theme";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useReducer, useState } from "react";

export const Brand = () => {
  const { scrollY } = useScroll();
  const getScrollParams = () => ({
    scrollEnd: window.innerHeight / 2,
    winWidthRatio: Math.log(window.innerWidth / 150) * 4,
  });
  const [scaleParams, setScaleParams] = useState(getScrollParams());
  const scale = useTransform(
    scrollY,
    [0, scaleParams.scrollEnd],
    [scaleParams.winWidthRatio, 2]
  );
  const dampedScale = useSpring(scale, {
    stiffness: 100,
    damping: 16,
    mass: 0.5,
  });

  useEffect(() => {
    const handleResize = () => setScaleParams(getScrollParams());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      style={{
        ...motionVars({
          "--font-scale": dampedScale,
          "--resizable-scale": `calc(14px * var(--font-scale))`,
        }),
        fontSize: `var(--resizable-scale)`,
        fontWeight: 700,
        transformOrigin: "top left",
        padding: rtsc(1),
        lineHeight: 1,
        textWrap: "nowrap",
      }}
    >
      John Rengwu
    </motion.div>
  );
};
