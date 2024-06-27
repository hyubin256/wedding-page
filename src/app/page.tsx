import Image from "next/image";
import HeadIntroduce from "@/components/HeadIntroduce";
import MiddleFlower from "@/components/MiddlleFlower";
import Photobook from "@/components/Photobook";
import AutoClock from "@/components/AutoClock";
import ImageSlider from "@/components/ImageSlider";
import Header from "@/components/Header";
import Calendar from "@/components/Calendar";
import RestaurantMap from "@/components/Map";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ImageSlider />
      <MiddleFlower />
      <HeadIntroduce />
      <AutoClock />
      <MiddleFlower />
      <RestaurantMap />
      <MiddleFlower />
      <Photobook />
      <MiddleFlower />
      <div className="py-8 bg-black text-center">
        Cảm ơn vì đã chia sẻ khoảnh khắc hạnh phúc này cùng chúng tôi
      </div>
    </main>
  );
}
