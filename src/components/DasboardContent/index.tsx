"use client";
import RotatingAvatar from "../RotatingAvatar";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DashboardContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration: 0.7,
          },
        },
      }}
    >
      <div className="w-[1045px] h-[400px] bg-[#181818] px-[40px] py-[20px] rounded-lg grid grid-cols-6 gap-4">
        {/* left side */}
        <div className="col-span-4 rounded-lg flex flex-col items-start justify-center gap-14">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-white text-2xl font-bold">Refer and Earn</h2>
            <p className="text-[#808080] text-sm">
              Invite your friends to Patara and earn a share of
            </p>
            <p className="text-[#808080] text-sm">
              their on-chain rewards forever!
            </p>
          </div>
          <div className="w-[480px] h-[96px] bg-[#282828] rounded-xl flex flex-col items-start justify-center px-4 gap-2">
            <p className="text-xs text-[#808080]">Your Referral link</p>
            <p className="text-white text-md">
              0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[230px] h-[48px] cursor-pointer text-sm font-semibold leading-5 tracking-normal flex items-center justify-center text-center font-sans">
              Copy Link
            </Button>
            <Button className="bg-[#383838] hover:bg-[#282828] text-white w-[230px] h-[48px] cursor-pointer text-sm font-semibold leading-5 tracking-normal flex items-center justify-center text-center font-sans">
              <Image
                src="/icons/share.png"
                width={24}
                height={24}
                alt="share icon"
              />
              Share
            </Button>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-2 rounded-lg flex items-center justify-center">
          <RotatingAvatar />
        </div>
      </div>
    </motion.div>
  );
}
