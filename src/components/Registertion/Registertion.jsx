import React, { useState } from "react";
import image from "../../assets/rimage.png";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedFill } from "react-icons/pi";

import { DNA } from "react-loader-spinner";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { BiLogoHeroku } from "react-icons/bi";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate("");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const [showPassword, setPasswordN] = useState(false);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handelFullname = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleSubmit = () => {
    let emailError = "";
    let fullNameError = "";
    let passwordError = "";
  
    // Email Validation
    if (!email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }
  
    // Full Name Validation
    if (!fullName) {
      fullNameError = "Please provide your full name.";
    }
  
    // Password Validation
    if (!password) {
      passwordError = "Please enter your password.";
    } else {
      const errors = [];
      if (!/[A-Z]/.test(password))
        errors.push("Use at least one uppercase letter.");
      if (!/[a-z]/.test(password))
        errors.push("Use at least one lowercase letter.");
      if (!/\d/.test(password)) errors.push("Use at least one number.");
      if (!/[@$!%*?&]/.test(password))
        errors.push("Use at least one special character.");
      if (password.length < 8)
        errors.push("Password must be at least 8 characters long.");
      passwordError = errors.join(" ");
    }
  
    // Set Errors to State
    setEmailErr(emailError);
    setFullNameErr(fullNameError);
    setPasswordErr(passwordError);
  
    if (!emailError && !fullNameError && !passwordError) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user; // Extract the user object
          sendEmailVerification(user) // Pass the user object here
            .then(() => {
              setLoading(true);
              toast.success("Registration Successfully Done. Please verify your email.");
              setEmail("");
              setFullName("");
              setPassword("");
              setTimeout(() => {
                navigate("/login");
              }, 4000);
            })
            .catch((error) => {
              console.error("Error sending email verification:", error);
              toast.error("Failed to send email verification. Please try again.");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailErr("This email is already used");
          }
          // ..
        });
    }
  };
  

  return (
    <div className="flex h-screen  overflow-hidden ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Zoom
      />
      {/* Left Section */}
      <div className="w-1/2 mt-[90px] pl-[190px]">
        <p className="font-nunito-font text-[35px] text-[#11175D] font-bold mb-2">
          Get started with easily register
        </p>
        <p className="font-poppins-font font-medium text-black mb-6">
          Free register and you can enjoy it
        </p>
        {successMessage && (
          <p className="bg-green-500 text-white p-4 w-[368px]">
            {successMessage}
          </p>
        )}

        {/* Email Address */}
        <div className="relative">
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
            className="w-[368px] border-2 border-[#B8BACF] h-[70px] pl-[52px] rounded-[8px]"
          />
          <p className="absolute tracking-[2px] bg-white top-[-10px] left-[34px] px-[18px] font-nunito-font text-[13px] text-[#11175D] font-semibold">
            Email address
          </p>
          <p className=" bg-[#EA6C00] rounded-lg text-center w-[300px] mt-1">
            {emailErr}
          </p>
        </div>
        {/* Full Name */}
        <div className="relative my-[26px]">
          <input
            onChange={handelFullname}
            value={fullName}
            type="text"
            placeholder="Enter your name"
            className="w-[368px] border-2 border-[#B8BACF] py-[26px] pl-[52px] rounded-[8px]"
          />
          <p className="absolute tracking-[2px] bg-white top-[-10px] left-[34px] px-[18px] font-nunito-font text-[13px] text-[#11175D] font-semibold">
            Full Name
          </p>
          <p className=" bg-[#EA6C00] rounded-lg text-center w-[300px] mt-1">
            {fullNameErr}
          </p>
        </div>

        {/* Password */}
        <div className="relative">
          <input
            onChange={handlepassword}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-[368px] border-2 border-[#B8BACF] py-[26px] pl-[52px] pr-[50px] rounded-[8px]"
          />
          <p className="absolute tracking-[2px] bg-white top-[-10px] left-[34px] px-[18px] font-nunito-font text-[13px] text-[#11175D] font-semibold">
            Password
          </p>
          <div
            onClick={() => setPasswordN(!showPassword)}
            className="absolute top-[30px] right-[230px]   cursor-pointer text-xl text-[#11175D]"
          >
            {showPassword ? <PiEyeBold /> : <PiEyeClosedFill />}
          </div>
          {passwordErr && (
            <p className="bg-[#EA6C00] rounded-lg text-center w-[500px] mt-2 text-sm">
              {passwordErr}
            </p>
          )}
        </div>
        <div className="w-[368px]">
  {loading ? (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        marginLeft: "145px",
      }}
      wrapperClass="dna-wrapper"
    />
  ) : (
    <button
      onClick={handleSubmit} // Fix: Add the onClick handler
      className="text-[20px] cursor-pointer font-nunito-font font-semibold bg-primary mt-[20px] text-white w-[368px] py-[20px] text-center rounded-[86px]"
    >
      Sign Up
    </button>
  )}
</div>

        {/* Submit Button */}

        <p className="mt-[5px] w-[368px] text-center font-sans text-[13px] font-bold">
          Already have an account?
          <span className="text-[#EA6C00] font-sans text-[15px] font-bold pl-[5px] cursor-pointer">
           <Link to="/login">Log In</Link>
          </span>
        </p>
      </div>

      {/* Right Section with Image */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Registration"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Registration;
