"use client";
import { useEffect, useState } from "react";
import Calendar from "../Calendar";

const AutoClock: React.FC = () => {
  const [days, setDays] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");

  useEffect(() => {
    const target = new Date("07/13/2024 18:30:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d.toString());
      setHours(h.toString());
      setMinutes(m.toString());
      setSeconds(s.toString());
      console.log("is here")
    }, 1000)


    return () => clearInterval(interval)

  }, [])

  return (
    <div className="max-w-5xl mx-auto pb-10 lg:pb-20 text-black flex flex-col gap-8">
      <div className="text-center flex flex-col gap-5">
        <div className="uppercase text-center text-2xl lg:text-4xl font-bold">
          Save the date
        </div>
        <div>
          Vào lúc <span className="text-xl lg:text-2xl font-bold">18:00 - Thứ Bảy</span>
          <br />
          Ngày  <span className="text-xl lg:text-2xl font-bold">13</span> tháng <span className="text-2xl font-bold">07</span> năm <span className="text-2xl font-bold">2024</span>
        </div>
      </div>
      <Calendar />
      <div className="px-5 lg:px-0">
        <div className="border-4 border-neutral-900 bg-gradient-to-r from-blue to-pink px-10 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {days && (
              <div className="flex flex-col items-center gap-5">
                <div className="text-4xl font-bold">
                  {days}
                </div>
                <div className="text-2xl uppercase">
                  Ngày
                </div>
              </div>
            )}
            <div className="flex flex-col items-center gap-5">
              <div className="text-4xl font-bold">
                {hours}
              </div>
              <div className="text-2xl uppercase">
                Giờ
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="text-4xl font-bold">
                {minutes}
              </div>
              <div className="text-2xl uppercase">
                Phút
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="text-4xl font-bold">
                {seconds}
              </div>
              <div className="text-2xl uppercase">
                Giây
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="border border-black bg-black text-white w-fit py-3 px-5 rounded-lg mx-auto hover:bg-transparent hover:text-black transition-all duration-300">
        Tham gia nhé
      </button> */}
    </div>
  )
}

export default AutoClock;
