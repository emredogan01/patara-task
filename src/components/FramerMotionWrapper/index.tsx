"use client";

import { motion } from "framer-motion";

interface FramerMotionWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
  width?: string;
  height?: string;
}
export default function FramerMotionWrapper({
  children,
  backgroundImage,
  width = "1260px",
  height = "683px",
}: FramerMotionWrapperProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex justify-center items-center ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              width: width,
              height: height,
            }
          : { width: width, height: height }
      }
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
