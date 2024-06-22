import IconHeart from "@/assets/icon/heart-outline-shape.svg";
import Image from "next/image";
import clsx from "clsx";

const Header: React.FC = () => {
  return (
    <div className="py-5 bg-gradient-to-r bg-white flex flex-col items-center gap-5">
      <div className="flex justify-center items-center gap-5 text-black text-2xl font-bold">
        <div className="">Huy</div>
        <Image src={IconHeart} alt="icon-heart" width={30} height={30} />
        <div className="">Thủy</div>
      </div>
      <div className={clsx("text-black relative px-5",
        "before:absolute before:w-12 before:h-[1px] before:top-1/2 before:left-full before:bg-black",
        "after:absolute after:w-12 after:h-[1px] after:top-1/2 after:right-full after:bg-black"
      )}>
        Just married
      </div>
    </div>
  )
}

export default Header;
