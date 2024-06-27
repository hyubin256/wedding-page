import Image from "next/image"
import MiddleFlowerImage from "@/assets/images/middle-flower.png"

const MiddleFlower: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center py-10">
      <Image
        src={MiddleFlowerImage}
        alt="middle-flower"
        width={400}
        height={100}
        className="w-[250px] lg:w-[400px]"
      />
    </div>
  )
}

export default MiddleFlower;
