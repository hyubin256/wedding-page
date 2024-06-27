import Image from "next/image"
import GroomImage from "@/assets/images/groom.jpg";
import BrideImage from "@/assets/images/bride.jpg";

const HeadIntroduce: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 lg:py-20 flex flex-col gap-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 text-black">
        <div className="w-full px-5 flex flex-col items-center gap-7">
          <Image
            src={GroomImage}
            alt=""
            width={500}
            height={200}
            className="rounded-full w-[300px] h-[300px] object-cover object-top"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg">Chú rể</div>
            <div className="text-2xl font-bold uppercase">Nguyễn Minh Huy</div>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col items-center gap-7">
          <Image
            src={BrideImage}
            alt=""
            width={500}
            height={200}
            className="rounded-full w-[300px] h-[300px] object-cover object-top"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg">Cô dâu</div>
            <div className="text-2xl font-bold uppercase">Lương Hồng Kim Thủy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadIntroduce;
