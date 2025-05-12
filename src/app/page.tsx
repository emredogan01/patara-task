import TopBar from "@/components/TopBar";
import BackgroundImage from "@/components/BackgroundImage";
import RotatingAvatar from "@/components/RotatingAvatar";
import OverlayContent from "@/components/OverlayContent";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function Home() {
  return (
    <div className="bg-black min-h-screen pt-[80px] flex justify-center items-center">
      <TopBar />
      <FramerMotionWrapper>
        <BackgroundImage />
        <div className="relative z-10 bg-[#181818] w-[464px] h-[643px] rounded-lg flex flex-col justify-center items-center">
          <RotatingAvatar />
          <OverlayContent />
        </div>
      </FramerMotionWrapper>
    </div>
  );
}
