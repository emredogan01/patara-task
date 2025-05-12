"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatingAvatar() {
  return (
    <motion.div
      className="mb-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        scale: { duration: 0.8, ease: "easeOut" },
        opacity: { duration: 0.8 },
      }}
    >
      <Image src="/images/avatar.png" alt="avatar" width={320} height={320} />
    </motion.div>
  );
}
