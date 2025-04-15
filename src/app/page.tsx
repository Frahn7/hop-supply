import { Navbar } from "./components/Navbar";
import { IoIosCall } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { AcordeonCards } from "./components/AcordeonCards";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex justify-center flex-col w-full gap-5">
      <Navbar />
      <div className="bg-yellow-300 h-[80px] w-[60%] self-center flex flex-row gap-12 justify-center text-2xl items-center">
        <IoLogoWhatsapp
          color="[#363844]"
          className="bg-white  rounded-full  cursor-pointer"
        />
        <span className="rotate-[260deg]">
          <IoIosCall color="[#363844]" className=" cursor-pointer" />
        </span>
        <FaShareAlt color="[#363844]" className=" cursor-pointer" />
      </div>
      <div className="self-center w-[60%]">
        <AcordeonCards />
      </div>
    </div>
  );
}
