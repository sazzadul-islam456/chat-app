import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";


import man1 from "../../../assets/raghev.png";
import man2 from "../../../assets/swathi.png";
import man3 from "../../../assets/Kiran.png";
import man4 from "../../../assets/Tejeshwini.png";

const UserList = () => {
  
  const data = useSelector((state) => state.userDetails.userInfo);
  const [userList, setUserList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    if (!data || !data.uid) return; 

    const userRef = ref(db, "users/");

    console.log("Listening for changes...");

    const unsubscribe = onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const arr = []; 
          snapshot.forEach((item) => {
            console.log("Processing item with key:", item.key); 
            if (data.uid !== item.key) {
              arr.push(item.val()); 
            }
          });
          setUserList(arr); 
          console.log("Updated user list:", arr); 
        } else {
          console.log("No data available at 'users/' path.");
          setUserList([]); 
        }
      },
      (error) => {
        console.error("Error reading database:", error);
      }
    );

    
    return () => unsubscribe();
  }, [data.uid]); 

  return (
    <div className="bg-slate-200 w-[427px] h-[420px] ml-[15px] mt-[10px] rounded-xl">
      <div className="flex justify-between pt-[13px] pl-[20px]">
        <p className="font-poppins-font font-semibold text-[20px]">User List</p>
        <div className="pr-[10px]">
          <BsThreeDotsVertical size={20} />
        </div>
      </div>

      <article>
        {userList.length > 0 ? (
          userList.slice(0, 5).map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between pt-[15px]">
                <div className="flex items-center">
                  
                  <img className="pl-[20px]" src={man1} alt="User" />
                  <div>
                    <p className="font-poppins-font font-semibold text-[18px] pl-[15px]">
                      {item.username || "No username"}
                    </p>
                    <p className="font-poppins-font font-medium text-[14px] text-[#4D4D4D] pl-[15px]">
                      {item.email || "No email"}
                    </p>
                  </div>
                </div>
                <div className="bg-[#5F35F5] w-[30px] h-[30px] flex items-center justify-center rounded-md mr-[15px]">
                  <FaPlus size={20} className="text-white" />
                </div>
              </div>
              <div className="bg-slate-500 w-[375px] h-[1px] mt-[5px] ml-[30px]"></div>
            </div>
          ))
        ) : (
          <p className="text-center pt-[20px]">No users found</p>
        )}
      </article>
    </div>
  );
};

export default UserList;
