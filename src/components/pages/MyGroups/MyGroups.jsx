import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import man1 from "../../../assets/raghev.png";
import man2 from "../../../assets/swathi.png";

const MyGroups = () => {
  return (
    <div>
        <div className="bg-slate-200 w-[427px] h-[250px] ml-[10px] mt-[15px] rounded-xl">
            <div className=" flex justify-between pt-[13px] pl-[20px]">
                            <p className=' font-poppins-font font-semibold text-[20px]'>My Groups</p>
                            <div className=" pr-[10px]">
                            <BsThreeDotsVertical size={20}/>
                            </div>
                            
                        </div>

                        <div className=" flex items-center justify-between pt-[15px]">
                                          <div className=" flex items-center ">
                                            <img className=" pl-[20px] pt-[px]" src={man1} alt="" />
                                            <div className="">
                                              <p className=" font-poppins-font font-semibold text-[18px] pl-[15px]">
                                                Raghav
                                              </p>
                                              <p className=" font-poppins-font font-medium text-[14px] text-[#4D4D4D] pl-[15px]">
                                                Dinner?
                                              </p>
                                            </div>
                                          </div>
                                          <div className=" w-[87px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                                            <p className=" font-poppins-font font-medium text-[10px] text-[#4D4D4D]">
                                            Today, 8:56pm
                                            </p>
                                          </div>
                                        </div>
                                        <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>

                                        <div className=" flex items-center justify-between pt-[15px]">
                                          <div className=" flex items-center ">
                                            <img className=" pl-[20px] pt-[px]" src={man2} alt="" />
                                            <div className="">
                                              <p className=" font-poppins-font font-semibold text-[18px] pl-[15px]">
                                                Raghav
                                              </p>
                                              <p className=" font-poppins-font font-medium text-[14px] text-[#4D4D4D] pl-[15px]">
                                                Dinner?
                                              </p>
                                            </div>
                                          </div>
                                          <div className=" w-[87px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                                            <p className=" font-poppins-font font-medium text-[10px] text-[#4D4D4D]">
                                            Today, 8:56pm
                                            </p>
                                          </div>
                                        </div>
                                        <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>
        </div>
    </div>
  )
}

export default MyGroups