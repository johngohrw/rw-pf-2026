import {
  useState,
  type ComponentProps,
  type CSSProperties,
  type JSX,
} from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { rsc, rtsc } from "@utils/theme";
export type MediaFrameObj = {
  src: string;
  size: string;
  type: "video" | "image";
  x: string;
  y: string;
  style?: CSSProperties;
  divStyle?: CSSProperties;
};

export const MediaFrames = ({ frames }: { frames: MediaFrameObj[] }) => {
  return frames.map(renderMediaFrame);
};

export const MediaFrame = (frame: MediaFrameObj) => {
  return frame.type === "video" ? (
    <GracefulVideoLoader
      src={frame.src}
      size={frame.size}
      style={frame.style}
      divStyle={frame.divStyle}
    />
  ) : (
    <GracefulImageLoader
      src={frame.src}
      size={frame.size}
      style={frame.style}
      divStyle={frame.divStyle}
    />
  );
};

export const renderMediaFrame = (frame: MediaFrameObj) => {
  return <MediaFrame {...frame} />;
};

export const GracefulVideoLoader = ({
  src,
  size,
  style,
  divStyle,
}: {
  size: string;
  divStyle?: CSSProperties;
} & ComponentProps<"video">) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <motion.div
      initial={{ translateY: `10%`, opacity: 0 }}
      animate={{ translateY: "0%", opacity: hasLoaded ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        width: size,
        height: size,
        overflow: "hidden",
        borderRadius: rtsc(1),
        boxShadow: `0 3px 10px -2px rgba(0, 0, 0, 0.3)`,

        ...divStyle,
      }}
    >
      <motion.video
        onLoadedData={() => setHasLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          imageRendering: "auto",
          ...style,
        }}
        src={src}
        autoPlay
        muted
        playsInline
        loop
      />
    </motion.div>
  );
};

export const GracefulImageLoader = ({
  src,
  size,
  style,
  divStyle,
}: { size: string; divStyle?: CSSProperties } & ComponentProps<"img">) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <motion.div
      initial={{ translateY: `10%`, opacity: 0 }}
      animate={{ translateY: "0%", opacity: hasLoaded ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        borderRadius: rtsc(1),

        width: size,
        height: size,
        overflow: "hidden",
        boxShadow: `0 3px 10px -2px rgba(0, 0, 0, 0.3)`,
        ...divStyle,
      }}
    >
      <motion.img
        onLoad={() => setHasLoaded(true)}
        style={{
          objectFit: "cover",
          imageRendering: "auto",
          width: size,
          height: size,
          ...style,
        }}
        src={src}
      />
    </motion.div>
  );
};
