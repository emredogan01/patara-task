"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OverlayContent() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center gap-10"
      variants={itemVariants}
    >
      <motion.div className="w-[424px] h-[74px]" variants={itemVariants}>
        <h3 className="text-white mb-2 font-semibold text-lg">
          Refer friends and earn with Patara!
        </h3>
        <p className="text-gray-500 text-sm">
          Invite your friends to Patana and earn a share of their
        </p>
        <p className="text-gray-500 text-sm mb-4">on-chain rewards forever!</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[139px] h-[48px] cursor-pointer text-sm font-semibold leading-5 tracking-normal flex items-center justify-center text-center font-sans">
          Connect / Sign in
        </Button>
      </motion.div>
    </motion.div>
  );
}
