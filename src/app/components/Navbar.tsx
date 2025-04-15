import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center  mt-5 text-[18px] px-5">
        <span className="flex flex-row items-center gap-2 w-[40%] font-bold">
          <img src="/hop-logo.png" alt="logo" className="w-9 h-9" />
          Hop Supply
        </span>
        <span className="self-center cursor-pointer">
          <GiHamburgerMenu />
        </span>
      </div>
    </div>
  );
};
