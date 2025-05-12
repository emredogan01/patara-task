import DashboardContent from "@/components/DasboardContent";
import TopBar from "@/components/TopBar";
import Cards from "@/components/Cards";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function ContentPage() {
  const user = { name: "@patara sui" };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {/* <FramerMotionWrapper> */}
      <TopBar user={user} />
      <div className="flex gap-5">
        <DashboardContent />
        <div className="w-[335px] h-[400px] flex flex-col justify-between">
          <Cards
            icon="/icons/money.png"
            title="Toral Earned Free"
            value="$1.000.000"
          />
          <Cards
            icon="/icons/star.png"
            title="Unclaimed Free"
            value="$500.00"
            buttonText="Claim"
          />
          <Cards
            icon="/icons/gift.png"
            title="Total Refferal Points"
            value="1289"
          />
          <Cards icon="/icons/man.png" title="Refferals" value="34" />
        </div>
      </div>
      {/* </FramerMotionWrapper> */}
    </div>
  );
}
