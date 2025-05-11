"use client";

import {
  Drawer as DrawerPrimitive,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "../ui/drawer";
import Image from "next/image";

interface DrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Drawer({ isOpen, onOpenChange }: DrawerProps) {
  return (
    <DrawerPrimitive open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Image
          src="/icons/drawer.png"
          width={34}
          height={34}
          className="cursor-pointer"
          alt="drawer icon"
        />
      </DrawerTrigger>
      <DrawerContent
        className="w-[300px] bg-[#181818] text-white"
        data-vaul-drawer-direction="left"
      >
        <DrawerTitle>Menu</DrawerTitle>
      </DrawerContent>
    </DrawerPrimitive>
  );
}
