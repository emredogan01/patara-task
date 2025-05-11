import TopBar from "@/components/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen pt-[80px] flex justify-center items-center">
      <TopBar />
      {/* İçerik */}
      <div className="flex justify-center items-center w-[1260px] h-[683px]">
        <Image
          src="/images/background.png"
          alt="backgorund image"
          width={1260}
          height={683}
        />
      </div>
    </div>
  );
}
