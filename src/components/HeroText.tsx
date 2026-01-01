import { calc, rtsc, rtscWithMax, varOf } from "@utils/theme";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroText = () => {
  return (
    <div
      style={{
        padding: rtsc(1),
        fontSize: `clamp(14px, ${rtsc(2)}, 15vw)`,
        fontWeight: 500,
        lineHeight: 1,
        textAlign: "center",
        textWrap: "balance",
        width: rtsc(40),
        maxWidth: `calc(100vw - 2rem)`,
      }}
    >
      I specialize in architecting scalable systems, engaging digital
      experiences, and intuitive user flows.
    </div>
  );
};
