import RiversideImage from "@/assets/images/riverside_restaurant.png"
import Image from "next/image";

const RestaurantMap: React.FC = () => {
  return (
    <div className="text-black py-10 lg:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-5 px-5 lg:px-0">
        <div className="uppercase text-center text-2xl lg:text-4xl font-bold">
          Địa điểm
        </div>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl mb-3">Nhà hàng Riverside Palace</div>
          <div className="text-sm lg:text-base">360D Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh</div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image src={RiversideImage} alt="" width={1920} height={500} className="w-full object-cover aspect-square" />
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            className="aspect-square"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=360D%20%C4%90.%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n,%20Ph%C6%B0%E1%BB%9Dng%201,%20Qu%E1%BA%ADn%204,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vi%E1%BB%87t%20Nam+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default RestaurantMap
