import { useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const ScrollSmootherWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
      <ScrollSmootherInit />
    </>
  );
};

const ScrollSmootherInit = () => {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // page-level smoothing
      effects: true, // enables data-lag / data-speed
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return null;
};
