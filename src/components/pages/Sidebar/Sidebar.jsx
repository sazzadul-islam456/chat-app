import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import profile from "../../../assets/ppimage.png";

const Sidebar = () => {
  return (
    <div>
      <div className="w-[186px] h-[710px] ml-[10px] mt-[5px] rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* Sidebar content */}
        <div className=" pt-[38px] pl-[43px]">
          <img src={profile} alt="profile" />
        </div>

        <div className=" flex flex-col items-center ">
          <div className=" mt-[65px]">
          <IoHomeOutline size={45} color=" black" />
          </div>
          <div className=" mt-[50px]">
          <IoMdText size={45} color=" black"/>
          </div>
          <div className=" mt-[50px]">
          <FaBell size={45} color=" black"/>
          </div>
          <div className="mt-[50px]">
          <IoSettingsSharp size={45} color=" black"/>
          </div>
          <div className="mt-[90px]">
          <ImExit size={45} color=" black"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
