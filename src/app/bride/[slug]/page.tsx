"use client";

import { BrideList } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import CakeIcon from "@/assets/images/cake-icon.png"
import PhotoBookImage11 from '@/assets/images/DUCK8742.jpg';
import Header from "@/components/Header";
import RestaurantMap from "@/components/Map";
import ImageSlider from "@/components/ImageSlider";
import HeadIntroduce from "@/components/HeadIntroduce";
import Calendar from "@/components/Calendar";
import MiddleFlower from "@/components/MiddlleFlower";
import AutoClock from "@/components/AutoClock";
export default function Bride({ params }: { params: { slug: string } }) {
  const slugOfPage = params?.slug;
  const findSlug = BrideList.find((item) => item.slug === slugOfPage)
  console.log(findSlug)
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ImageSlider />
      <HeadIntroduce />
      {
        findSlug && (
          <div className="text-black px-3 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-[800px] min-h-[500px] mx-auto border border-neutral-900 p-5">
              <div>
                <Image
                  src={PhotoBookImage11}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="uppercase text-2xl mb-8">
                  Trân trọng kính mời
                </div>
                <div className="relative text-2xl text-bold w-full text-center before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-[-2px] before:bg-neutral-900 mb-8">
                  {findSlug.name}
                </div>
                <div className="mb-8 text-center">
                  Đến dự buổi tiệc chung vui <br />
                  Cùng gia đình chúng tôi tại
                </div>
                <div className="mb-8 text-center">
                  <div className="font-bold text-2xl">Nhà Hàng Riverside Palace</div>
                  <div className="mb-4 font-bold">Sảnh Thames</div>
                  <div>Địa chỉ: 360D Bến Vân Đồn, Phường 1, Quận 4, TP.HCM</div>
                </div>
                <div className="text-center mb-8 font-bold">
                  Vào lúc 18:00 - Thứ 7 <br />
                  Ngày 13 tháng 7 năm 2024
                </div>
                <div className="flex gap-10">
                  <span>Đón khách: 18 giờ</span>
                  <span>Khai tiệc: 19 giờ</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <MiddleFlower />
      <AutoClock />
      <MiddleFlower />
      <Calendar />
      <MiddleFlower />
      <RestaurantMap />
      <MiddleFlower />
      <div className="py-8 bg-black text-center">
        Cảm ơn vì đã chia sẻ khoảnh khắc hạnh phúc này cùng chúng tôi
      </div>
    </main>
  );
}
