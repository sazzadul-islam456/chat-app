import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import group from '../../../assets/grp1.png'
import friend from '../../../assets/friend.png'
import cousins from '../../../assets/friend-grp.png'

const GroupList = () => {
  return (
    <div>
        <div className=" bg-slate-200 w-[427px] h-[347px] ml-[15px] mt-[10px] rounded-xl">
            <div className=" flex justify-between pt-[13px] pl-[20px]">
                <p className=' font-poppins-font font-semibold text-[20px]'>Groups List</p>
                <div className=" pr-[10px]">
                <BsThreeDotsVertical size={20}/>
                </div>
                
            </div>

            <div className=" flex items-center justify-between pt-[15px]">
                    <img className=' pl-[20px] pt-[px]' src={group} alt=""/>
                    <div className="">
                        <p className=' font-poppins-font font-semibold text-[18px] pr-[30px]'>Friends Reunion</p>
                        <p className=' font-poppins-font font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                    </div>
                    <div className="bg-[#5F35F5] w-[87px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                        <p className=' font-poppins-font font-semibold text-[20px] text-[#fff]'>Join</p>
                    </div> 
                </div>
                <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>

                <div className=" flex items-center justify-between pt-[15px]">
                    <img className=' pl-[20px] pt-[px]' src={friend} alt=""/>
                    <div className="">
                        <p className=' font-poppins-font font-semibold text-[18px] pr-[30px]'>Friends Reunion</p>
                        <p className=' font-poppins-font font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                    </div>
                    <div className="bg-[#5F35F5] w-[87px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                        <p className=' font-poppins-font font-semibold text-[20px] text-[#fff]'>Join</p>
                    </div> 
                </div>
                <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>

                <div className=" flex items-center justify-between pt-[15px]">
                    <img className=' pl-[20px] pt-[px]' src={cousins} alt=""/>
                    <div className="">
                        <p className=' font-poppins-font font-semibold text-[18px] pr-[30px]'>Friends Reunion</p>
                        <p className=' font-poppins-font font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                    </div>
                    <div className="bg-[#5F35F5] w-[87px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                        <p className=' font-poppins-font font-semibold text-[20px] text-[#fff]'>Join</p>
                    </div> 
                </div>
                <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>
        </div>
    </div>
  )
}

export default GroupList