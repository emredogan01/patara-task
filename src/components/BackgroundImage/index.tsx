"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function BackgroundImage() {
  return (
    <motion.div
      variants={fadeInVariants}
      className="absolute top-0 left-0 w-full h-full"
    >
      <Image
        src="/images/background.png"
        alt="Background Image"
        width={1260}
        height={683}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
