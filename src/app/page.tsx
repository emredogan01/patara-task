"use client";

import TopBar from "@/components/TopBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-black min-h-screen pt-[80px] flex justify-center items-center">
      <TopBar />
      {/* İçerik */}
      <motion.div
        className="relative flex justify-center w-[1260px] h-[683px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Image */}
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

        {/* Overlay Image */}
        <motion.div
          className="relative z-10 bg-[#181818] w-[464px] h-[643px] rounded-lg flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            className="mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
            }}
          >
            <Image
              src="/images/avatar.png"
              alt="avatar"
              width={320}
              height={320}
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center gap-10"
            variants={itemVariants}
          >
            <motion.div className="w-[424px] h-[74px]" variants={itemVariants}>
              <h3 className="text-white mb-2 font-semibold text-lg">
                Refer friends and earn with Patara!
              </h3>
              <p className="text-gray-500 text-sm">
                Invite your friends to Patara and earn a share of their
              </p>
              <p className="text-gray-500 text-sm mb-4">
                on-chain rewards forever!
              </p>
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
        </motion.div>
      </motion.div>
    </div>
  );
}
