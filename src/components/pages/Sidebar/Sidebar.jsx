import React, { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline, IoSettingsSharp } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { BsCloudUpload } from "react-icons/bs";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import defaultImage from "../../../assets/swathi.png"; // Example: import a default image


import profile from "../../../assets/ppimage.png";

const Sidebar = () => {
  const [images, setImages] = useState(defaultImage); // Set default image here

  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Upload icon clicked");
    setShow(true);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Base64 Image:", reader.result); // Debugging
        setImage(reader.result); // Set the base64 string of the image
      };
      reader.readAsDataURL(files[0]); // Read the file as a base64 string
    }
  };

  return (
    <div>
      <div className="w-[186px] h-[710px] ml-[10px] mt-[5px] rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* Sidebar content */}
        <div className="pt-[38px] pl-[43px] relative group">
          <img src={profile} alt="profile" />
          <div className="w-[100px] h-[100px] cursor-pointer flex justify-center items-center group-hover:opacity-80 bg-black opacity-0 transition duration-300 top-[38px] left-[43px] rounded-full absolute">
            <BsCloudUpload
              onClick={handleClick}
              className="text-3xl text-white"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-[65px]">
            <IoHomeOutline size={45} color="black" />
          </div>
          <div className="mt-[50px]">
            <IoMdText size={45} color="black" />
          </div>
          <div className="mt-[50px]">
            <FaBell size={45} color="black" />
          </div>
          <div className="mt-[50px]">
            <IoSettingsSharp size={45} color="black" />
          </div>
          <div className="mt-[90px]">
            <ImExit size={45} color="black" />
          </div>
        </div>
      </div>

      {/* Conditionally rendered modal */}
      {show && (
        <div className="<absolute inset-0 z-10  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] w-full h-full fixed flex justify-center items-center top-0 left-0">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white w-[600px] p-5 px-8 rounded shadow-lg relative">
              <h3 className="font-poppins-font text-2xl font-semibold">
                Image Upload
              </h3>

              <div className="overflow-hidden mx-auto w-[100px] h-[100px] rounded-full border">
  <div
    className="img-preview w-full h-full bg-cover bg-center "
    style={{ backgroundImage: `url(${images})` }}
  ></div>
</div>

              <div className="mt-10">

                <input type="file" onChange={onChange} />
              </div>
              {image ? (
  <Cropper
  ref={cropperRef}
  style={{ height: 400, width: "100%" }}
  zoomTo={0.5}
  initialAspectRatio={1}
  preview=".img-preview" // Points to the preview container
  src={image} // Displays the image (default or uploaded)
  viewMode={1}
  minCropBoxHeight={10}
  minCropBoxWidth={10}
  background={false}
  responsive={true}
  autoCropArea={1}
  checkOrientation={false}
  guides={true}
/>
) : (
  <p className="text-[#243642] font-bold text-center">Please upload an image to start cropping.</p>
)}

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-[#5F34F5] text-white w-1/2 h-[50px] rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Upload
                </button>
                <button
                  onClick={handleBackToLogin}
                  className="bg-gray-500 text-white w-1/2 h-[50px] rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Back to Login
                </button>
              </div>
              <button
                onClick={() => setShow(false)}
                className="bg-[#1D1616] w-[50px] rounded-lg h-[30px] absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300"
              >
                <p className=" text-[#FFEB00] font-bold">Home</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
