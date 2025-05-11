"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Drawer from "../Drawer";

export default function TopBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="h-[80px] max-w-[1440px] mx-auto flex items-center justify-between px-4 text-white">
        {/* Left */}
        <div className="flex items-center justify-center w-[190px] h-[40px]">
          <div className="w-[40px] h-[40px] flex justify-center items-center">
            <Drawer isOpen={isDrawerOpen} onOpenChange={setDrawerOpen} />
          </div>
          <Image
            src="/icons/patara.png"
            width={134}
            height={36}
            alt="patara icon"
            className="cursor-pointer"
          />
        </div>

        {/* Center */}
        <div className="relative w-[464px] h-[40px]">
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="/icons/search.png"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>

          {/* Cmd + K */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1 bg-[#181818] p-1 rounded">
            <Image src="/icons/cmd.png" alt="Cmd Icon" width={12} height={12} />
            <Image src="/icons/k.png" alt="K Icon" width={12} height={12} />
          </div>

          {/* Input */}
          <Input
            placeholder="Enter Account, Platforms, NFTs, Token"
            className="w-full h-full pl-10 pr-16 border border-[#2a2a2a] bg-[#383838] text-white placeholder-gray-400 text-sm rounded-lg"
          />
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">
          {/* Settings Icon */}
          <div className="w-[40px] h-[40px] bg-[#242424] flex justify-center items-center rounded-lg">
            <Image
              src="/icons/settings.png"
              alt="Settings Icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>

          {/* Bell Icon */}
          <div className="w-[40px] h-[40px] bg-[#242424] flex justify-center items-center rounded-lg">
            <Image
              src="/icons/bell.png"
              alt="Bell Icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>

          {/* Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[170px] h-[40px] cursor-pointer text-sm font-semibold leading-5 tracking-normal flex items-center justify-center text-center font-sans">
            Connect / Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}
