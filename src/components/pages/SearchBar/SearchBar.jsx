import React from 'react';
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="">
      
      <div className="bg-slate-200 w-[427px] h-[59px] mt-[15px] ml-[15px] pr-[35px] rounded-[25px]">
        <div className="flex items-center justify-between pr-[20px] pt-[15px]">
          <div className="pl-[40px]">
            <IoSearch size={20} />
          </div>
          <p className="pr-[220px] text-[#3D3D3D] text-[16px] font-poppins-font font-medium">
            Search
          </p>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SearchBar;
