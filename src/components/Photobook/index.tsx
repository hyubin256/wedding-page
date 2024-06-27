import PhotoBookImage1 from "@/assets/images/DUCK8450.jpg";
import PhotoBookImage2 from "@/assets/images/DUCK8477.jpg";
import PhotoBookImage3 from "@/assets/images/DUCK8513.jpg";
import PhotoBookImage4 from "@/assets/images/DUCK8548.jpg";
import PhotoBookImage5 from "@/assets/images/DUCK8563.jpg";
import PhotoBookImage6 from "@/assets/images/DUCK8576.jpg";
import PhotoBookImage7 from "@/assets/images/DUCK8591.jpg";
import PhotoBookImage8 from "@/assets/images/DUCK8628.jpg";
import PhotoBookImage9 from "@/assets/images/DUCK8717.jpg";
import PhotoBookImage10 from "@/assets/images/DUCK8742.jpg";
import PhotoBookImage11 from "@/assets/images/DUCK8792.jpg";
import PhotoBookImage12 from "@/assets/images/DUCK8814.jpg";
import PhotoBookImage13 from "@/assets/images/DUCK8879.jpg";
import PhotoBookImage14 from "@/assets/images/DUCK8912.jpg";
import PhotoBookImage15 from "@/assets/images/DUCK8922.jpg";
import PhotoBookImage16 from "@/assets/images/DUCK8923.jpg";
import PhotoBookImage17 from "@/assets/images/DUCK8927.jpg";
import PhotoBookImage18 from "@/assets/images/DUCK8934.jpg";
import PhotoBookImage19 from "@/assets/images/DUCK8943.jpg";
import PhotoBookImage20 from "@/assets/images/DUCK9055.jpg";
import PhotoBookImage21 from "@/assets/images/DUCK9070.jpg";
import PhotoBookImage22 from "@/assets/images/DUCK9135.jpg";
import PhotoBookImage23 from "@/assets/images/DUCK9155.jpg";
import PhotoBookImage24 from "@/assets/images/DUCK9188.jpg";
import PhotoBookImage25 from "@/assets/images/DUCK8879.jpg";
import PhotoBookImage26 from "@/assets/images/DUCK8912.jpg";
import PhotoBookImage27 from "@/assets/images/DUCK8922.jpg";
import PhotoBookImage28 from "@/assets/images/DUCK8923.jpg";
import PhotoBookImage29 from "@/assets/images/DUCK8927.jpg";
import PhotoBookImage30 from "@/assets/images/DUCK8934.jpg";
import PhotoBookImage31 from "@/assets/images/DUCK8943.jpg";
import PhotoBookImage32 from "@/assets/images/DUCK9055.jpg";
import PhotoBookImage33 from "@/assets/images/DUCK9070.jpg";
import PhotoBookImage34 from "@/assets/images/DUCK9135.jpg";
import PhotoBookImage35 from "@/assets/images/DUCK9155.jpg";
import PhotoBookImage36 from "@/assets/images/DUCK9188.jpg";
import Image from "next/image";
import clsx from "clsx";
import { PhotobookList } from "@/utils/constant";

const listOfImage = [
  { link: PhotoBookImage2, size: "" },
  { link: PhotoBookImage3, size: "" },
  { link: PhotoBookImage4, size: "" },
  { link: PhotoBookImage5, size: "" },
  { link: PhotoBookImage6, size: "" },
  { link: PhotoBookImage7, size: "" },
  { link: PhotoBookImage8, size: "" },
  { link: PhotoBookImage9, size: "" },
];

const Photobook: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 lg:py-20 px-5 lg:px-0 flex flex-col gap-10 lg:gap-20 text-black">
      <h2 className="uppercase text-center text-2xl lg:text-4xl font-bold">
        Album & Video
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          PhotobookList.map((image, index) => {
            return (
              <div
                key={`photobook-${index}`}
                className={clsx((index + 1) % 6 === 1 || (index + 1) % 6 === 0 ? "sm:col-span-2" : "col-span-1", "h-[400px]",
                  {
                    "object-top": image.position === "top"
                  })}
              >
                <div className="relative w-full h-full" >
                  <Image
                    src={image.url}
                    alt=""
                    fill
                    objectFit="cover"
                    loading="lazy"
                    className="aspect-square lg:aspect-auto"
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <iframe
          className="w-full h-[350px] lg:h-[500px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yUIfATug86M?si=OzFJuR-sMxB6Hk3v"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  )
}

export default Photobook;
