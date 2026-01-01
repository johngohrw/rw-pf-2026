import { calc, motionVars, rtsc, rtscWithMax, varOf } from "@utils/theme";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

export const HeroText = () => {
  const { scrollY } = useScroll();
  const getScrollParams = () => ({
    scrollEnd: window.innerHeight / 4,
    winWidthRatio: Math.log(window.innerWidth / 150) * 4,
  });
  const [scaleParams, setScaleParams] = useState(getScrollParams());
  const scale = useTransform(scrollY, [0, scaleParams.scrollEnd], [1, 0]);
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
          "--opacity": dampedScale,
        }),
        position: "absolute",
        right: 0,
        bottom: 0,
        opacity: "var(--opacity)",
        padding: `${rtsc(2)} ${rtsc(2.5)}`,
        fontSize: `clamp(14px, ${rtsc(2)}, 15vw)`,
        fontWeight: 500,
        lineHeight: 1,
        textAlign: "right",
        textWrap: "balance",
      }}
    >
      I'm a creative developer specializing in architecting scalable systems,
      engaging digital experiences, and intuitive user flows.
    </motion.div>
  );
};
