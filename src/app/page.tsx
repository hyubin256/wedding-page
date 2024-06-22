import Image from "next/image";
import HeadIntroduce from "@/components/HeadIntroduce";
import MiddleFlower from "@/components/MiddlleFlower";
import Photobook from "@/components/Photobook";
import AutoClock from "@/components/AutoClock";
import ImageSlider from "@/components/ImageSlider";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ImageSlider />
      <MiddleFlower />
      <HeadIntroduce />
      <MiddleFlower />
      <Photobook />
      <MiddleFlower />
      <AutoClock />
      <MiddleFlower />
    </main>
  );
}
