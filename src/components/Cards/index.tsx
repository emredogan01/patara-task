"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface CardProps {
  icon: string;
  title: string;
  value: string;
  buttonText?: string;
}

export default function Cards({ icon, title, value, buttonText }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-[335px] h-[85px] bg-[#181818] rounded-lg flex items-center px-4 gap-4">
        <div className="w-[48px] h-[48px] bg-[#282828] flex items-center justify-center rounded-lg">
          <Image src={icon} alt="Icon" width={24} height={24} />
        </div>

        <div className="flex flex-col flex-grow">
          <p className="text-[#808080] text-sm font-regular leading-[18px]">
            {title}
          </p>
          <p className="text-white text-lg font-medium leading-[28px]">
            {value}
          </p>
        </div>

        {buttonText && (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[70px] h-[48px] px-4 py-2 text-sm font-semibold rounded-lg">
            {buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
