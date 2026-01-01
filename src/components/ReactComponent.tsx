import { motion } from "motion/react";
export const ReactComponent = () => {
  return (
    <motion.button
      style={{ width: "100px", height: "100px" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
    />
  );
};
