import React, { useEffect, useState } from "react";
import profile from "../../../assets/ppimage.png";
import { IoHomeOutline } from "react-icons/io5";
import { PiChatCircleTextFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { HiDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import Grop from "../../../assets/grp1.png";
import friend from "../../../assets/friend.png";
import friends from "../../../assets/friend-grp.png";
import raghave from "../../../assets/raghev.png";
import swhati from "../../../assets/swathi.png";
import Kiran from "../../../assets/Kiran.png";
import Tejeshwini from "../../../assets/Tejeshwini.png";
import Marvin from "../../../assets/Marvin.png";



const Home = () => {

  
  return (
    <div className="overflow-hidden">
      
 
      
    
    <div className="">
      <div className="px-[15px] py-[35px] w-full flex">
        {/* Sidebar */}
        <div className="w-[186px] h-[954px] bg-[#5F35F5] rounded-[20px] flex-shrink-0">
          <div className="pl-[42px] pt-[38px] relative">
            <img src={profile} alt="" />
            <div className="w-[100px] h-[100px] bg-red-400 absolute"></div>
            <div className="pl-[25px] pt-[78px]">
              <IoHomeOutline
                className="text-black text-[60px] transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#f3f3f3] hover:shadow-lg hover:scale-110 
                hover:text-[#5F35F5] hover:rounded-[12px] p-[10px] hover:w-[90px] h-[50px]"
              />
            </div>
            <div className="pl-[25px] pt-[47px]">
              <PiChatCircleTextFill
                className="text-black text-[60px] transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#f3f3f3] hover:shadow-lg hover:scale-110 
                hover:text-[#5F35F5] hover:rounded-[12px] p-[10px]"
              />
            </div>
            <div className="pl-[25px] pt-[47px]">
              <FaBell
                className="text-black text-[60px] transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#f3f3f3] hover:shadow-lg hover:scale-110 
                hover:text-[#5F35F5] hover:rounded-[12px] p-[10px]"
              />
            </div>
            <div className="pl-[25px] pt-[47px]">
              <IoSettingsSharp
                className="text-black text-[60px] transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#f3f3f3] hover:shadow-lg hover:scale-110 
                hover:text-[#5F35F5] hover:rounded-[12px] p-[10px]"
              />
            </div>
            <div className="pl-[25px] pt-[260px]">
              <ImExit
                className="text-black text-[60px] transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#f3f3f3] hover:shadow-lg hover:scale-110 
                hover:text-[#5F35F5] hover:rounded-[12px] p-[10px]"
              />
            </div>
          </div>
        </div>

        {/* search button */}

        {/* Group List Section */}
        <div className=" flex flex-col">
        <div className="pl-[43px] flex">


          {/* Group List 1 */}
          <div className=" pl-[22px] ">
            {/* search button start */}
            <div className="pb-[43px] ">
              <div className="w-[427px] h-[69px]  rounded-[20px] flex justify-between items-center shadow-xl overflow-visible   ">
                <div className=" flex pl-[20px] items-center">
                  <IoSearch className="text-[30px]" />
                  <p className="pl-[10px] font-poppins-font font-medium text-[16px] text-[#3D3D3D]">
                    search
                  </p>
                </div>
                <HiDotsVertical className="text-[20px] text-[#5F35F5]" />
              </div>
            </div>
            {/* search button end*/}
            <div className="w-[427px] h-[347px]  rounded-[20px] py-[13px] px-[20px]  shadow-2xl overflow-visible  ">
              <div className="flex justify-between">
                <p className="font-poppins-font font-semibold text-[20px]">
                  Group List
                </p>
                <HiDotsVertical className="text-[20px] text-[#5F35F5]" />
              </div>

              <div className="pt-[17px] flex justify-around items-center">
                <img src={Grop} alt="" />
                <div>
                  <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Friends Reunion
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Hi Guys, Wassup!
                  </p>
                </div>
                <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
                  Join
                </p>
              </div>
              <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex justify-around items-center">
                <img src={friend} alt="" />
                <div>
                  <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Friends Forever
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Good to see you.
                  </p>
                </div>
                <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
                  Join
                </p>
              </div>
              <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex justify-around items-center">
                <img src={friends} alt="" />
                <div>
                  <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Crazy Cousins
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    What plans today?
                  </p>
                </div>
                <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
                  Join
                </p>
              </div>
            </div>
          </div>

          {/* Group List 2 */}
          <div className="pl-[22px] ">
            <div className="w-[344px] h-[465px] rounded-[20px] py-[13px] px-[20px] shadow-xl overflow-visible ">
              <div className="flex justify-between">
                <p className="font-poppins-font font-semibold text-[20px]">
                  Friends
                </p>
                <HiDotsVertical className="text-[20px]" />
              </div>
              <div className="pt-[17px] flex   items-center">
                <img src={raghave} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Raghav
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Dinner?
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today, 8:56pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={swhati} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Swathi
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Sure!
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today, 2:31pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={Kiran} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Kiran
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Hi.....
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Yesterday, 6:22pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={Tejeshwini} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Tejeshwini
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      I will call him today.
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today,12:22pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group List 3 */}
          <div className="pl-[22px]">
            <div className="w-[344px] h-[465px] rounded-[20px] py-[13px] px-[20px] shadow-xl overflow-visible ">
              <div className="flex justify-between">
                <p className="font-poppins-font font-semibold text-[20px]">
                  User List
                </p>
                <HiDotsVertical className="text-[20px]" />
              </div>
              <div className="pt-[17px] flex  items-center">
                <img src={raghave} alt="" />
                <div className="pl-[5px]">
                  <p className=" font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Raghav
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Today, 8:56pm
                  </p>
                </div>
                <div className="pl-[90px]">
                  <FaPlus className="w-[30px] h-[30px] bg-[#5F35F5] text-white rounded-[5px] " />
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex  items-center">
                <img src={swhati} alt="" />
                <div className="pl-[5px]">
                  <p className=" font-poppins-font font-semibold text-[18px] text-[#000000]">
                    swhati
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Today, 2:31pm
                  </p>
                </div>
                <div className="pl-[95px]">
                  <FaPlus className="w-[30px] h-[30px] bg-[#5F35F5] text-white rounded-[5px] " />
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex  items-center">
                <img src={Kiran} alt="" />
                <div className="pl-[5px]">
                  <p className=" font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Kiran
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Today, 2:31pm
                  </p>
                </div>
                <div className="pl-[95px]">
                  <FaPlus className="w-[30px] h-[30px] bg-[#5F35F5] text-white rounded-[5px] " />
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex  items-center">
                <img src={Tejeshwini} alt="" />
                <div className="ml-[5px]">
                  <p className=" font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Tejeshwini
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Today, 12:22pm
                  </p>
                </div>
                <div className="ml-[87px]">
                  <FaPlus className="w-[30px] h-[30px] bg-[#5F35F5] text-white rounded-[5px] " />
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex  items-center">
                <img src={Marvin} alt="" />
                <div className="pl-[5px]">
                  <p className=" font-poppins-font font-semibold text-[18px] text-[#000000]">
                    Marvin
                  </p>
                  <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                    Today, 8:56pm
                  </p>
                </div>
                <div className="pl-[90px]">
                  <FaPlus className="w-[30px] h-[30px] bg-[#5F35F5] text-white rounded-[5px] " />
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Group List 4 */}
        <div className=" flex">
        <div className=" pl-[60px] pt-[42px]">
           
           <div className="w-[427px] h-[462px] rounded-[20px] py-[13px] px-[20px] shadow-xl overflow-visible ">
             <div className="flex justify-between">
               <p className="font-poppins-font font-semibold text-[20px]">
               Friend  Request
               </p>
               <HiDotsVertical className="text-[20px] text-[#5F35F5]" />
             </div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={raghave} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Raghave
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 raghave
                 </p>
               </div>
               </div>
               <div className=" pl-[140px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               Accept
               </p>
               </div>
               </div>
             </div>
             <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={swhati} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 swhati
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Sure!
                 </p>
               </div>
               </div>
               <div className=" pl-[160px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               Accept
               </p>
               </div>
               </div>
             </div>
             <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={Kiran} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Kiran
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Hi.....
                 </p>
               </div>
               </div>
               <div className=" pl-[170px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               Accept
               </p>
               </div>
               </div>
             </div>
             <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={Tejeshwini} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Tejeshwini
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 I will call him today.
                 </p>
               </div>
               </div>
               <div className=" pl-[80px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               Accept
               </p>
               </div>
               </div>
             </div>
             <div className="w-[350px] h-[1px] bg-black mx-auto mt-[13px]"></div>
           </div>
         </div>
         {/* Group List 5 */}
         <div className="pl-[22px] pt-[42px]">
            <div className="w-[344px] h-[465px] rounded-[20px] py-[13px] px-[20px] shadow-xl overflow-visible ">
              <div className="flex justify-between">
                <p className="font-poppins-font font-semibold text-[20px]">
                My Groups
                </p>
                <HiDotsVertical className="text-[20px]" />
              </div>
              <div className="pt-[17px] flex   items-center">
                <img src={raghave} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Raghav
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Dinner?
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today, 8:56pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={swhati} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Swathi
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Sure!
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today, 2:31pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={Kiran} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Kiran
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      Hi.....
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Yesterday, 6:22pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[277px] h-[1px] bg-black mx-auto mt-[13px]"></div>

              <div className="pt-[17px] flex   items-center">
                <img src={Tejeshwini} alt="" />

                <div className="flex justify-between items-center">
                  <div className="pl-[5px]">
                    <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                      Tejeshwini
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                      I will call him today.
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-poppins-font font-medium text-[10px] text-[#4D4D4D] pl-[70px]">
                      Today,12:22pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Group List 6 */}

          <div className=" pl-[22px] pt-[42px]">
           
           <div className="w-[350px] h-[465px]  rounded-[20px] py-[13px] px-[20px]  shadow-xl overflow-visible ">
             <div className="flex justify-between">
               <p className="font-poppins-font font-semibold text-[20px]">
               Friend  Request
               </p>
               <HiDotsVertical className="text-[20px] text-[#5F35F5]" />
             </div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={raghave} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Raghave
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Today,8:56pm
                 </p>
               </div>
               </div>
               <div className=" pl-[100px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               unblock
               </p>
               </div>
               </div>
             </div>
             <div className="w-[300px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={swhati} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 swhati
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Today,2:31pm
                 </p>
               </div>
               </div>
               <div className=" pl-[100px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               unblock
               </p>
               </div>
               </div>
             </div>
             <div className="w-[300px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={Kiran} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Kiran
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Yesterday,6:22pm
                 </p>
               </div>
               </div>
               <div className=" pl-[100px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               unblock
               </p>
               </div>
               </div>
             </div>
             <div className="w-[300px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={Tejeshwini} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Tejeshwini
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Tejeshwini
                 </p>
               </div>
               </div>
               <div className=" pl-[100px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               unblock
               </p>
               </div>
               </div>
             </div>
             <div className="w-[300px] h-[1px] bg-black mx-auto mt-[13px]"></div>

             <div className="pt-[17px] flex  items-center">
               <div className=" flex  items-center">
               <div className=" flex gap-2 ">
               <img src={Marvin} alt="" />
               <div>
                 <p className="font-poppins-font font-semibold text-[18px] text-[#000000]">
                 Marvin
                 </p>
                 <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D]">
                 Today,8:56pm
                 </p>
               </div>
               </div>
               <div className=" pl-[100px]">
               <p className="bg-[#5F35F5] w-[87px] h-[30px] rounded-[5px] font-poppins-font font-semibold text-[20px] text-center text-white cursor-pointer">
               unblock
               </p>
               </div>
               </div>
             </div>
             
           </div>
         </div>
         
        </div>
        </div>
        
        

      </div>
     
      
      </div>
    
  
   

    </div>
  );
};

export default Home;
