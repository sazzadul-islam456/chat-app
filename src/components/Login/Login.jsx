import React, { useState } from "react";
import image from "../../assets/login.jpg";
import google from "../../assets/google.png";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr(""); // Clear the error on input change
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr(""); // Clear the error on input change
  };

  const handleSubmit = () => {
    let emailError = "";
    let passwordError = "";

    if (!email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!password) {
      passwordError = "Please enter your password.";
    } else {
      const errors = [];
      if (!/[A-Z]/.test(password)) errors.push("Use at least one uppercase letter.");
      if (!/[a-z]/.test(password)) errors.push("Use at least one lowercase letter.");
      if (!/\d/.test(password)) errors.push("Use at least one number.");
      if (!/[@$!%*?&]/.test(password)) errors.push("Use at least one special character.");
      if (password.length < 8) errors.push("Password must be at least 8 characters long.");
      passwordError = errors.join(" ");
    }

    setEmailErr(emailError);
    setPasswordErr(passwordError);
  };

  return (
    <div className="flex justify-between overflow-hidden pt-[20px]">
      <div className="w-1/2 overflow-hidden pl-[190px] mt-[100px]">
        <p className="font-nunito-font text-[35px] text-[#11175D] font-bold mb-2">
          Login to your account!
        </p>

        <div className="mt-[29px] w-[220px] h-[62px] border-2 rounded-xl border-[#B8BACF] flex justify-center items-center">
        <FcGoogle className="text-2xl"/>
          <p className="pl-2">Login with Google</p>
        </div>

        <div className="relative mt-[32px]">
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
            className="w-[368px] border-2 border-[#B8BACF] py-[26px] pl-[52px] rounded-[8px]"
          />
          <p className="absolute tracking-[2px] bg-white top-[-10px] left-[34px] px-[18px] font-nunito-font text-[13px] text-[#11175D] font-semibold">
            Email address
          </p>
          {emailErr && (
            <p className="bg-[#EA6C00] rounded-lg text-center w-[300px] mt-1">
              {emailErr}
            </p>
          )}
        </div>

        <div className="relative mt-[60px]">
          <input
            onChange={handlePassword}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-[368px] border-2 border-[#B8BACF] py-[26px] pl-[52px] pr-[50px] rounded-[8px]"
          />
          <p className="absolute tracking-[2px] bg-white top-[-10px] left-[34px] px-[18px] font-nunito-font text-[13px] text-[#11175D] font-semibold">
            Password
          </p>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[30%] left-[60%] transform cursor-pointer text-xl text-[#11175D]"
          >
            {showPassword ? <PiEyeBold /> : <PiEyeClosedFill />}
          </div>
          {passwordErr && (
            <p className="bg-[#EA6C00] rounded-lg text-center w-[500px] mt-2 text-sm">
              {passwordErr}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="text-[20px] font-nunito-font font-semibold bg-primary mt-[55px] text-white w-[368px] py-[20px] text-center rounded-[8px]"
        >
          Login to Continue
        </button>
        <p className="mt-[35px] w-[368px] font-sans text-[13px] font-bold">
          Don’t have an account?{" "}
          <span className="text-[#EA6C00] font-sans text-[13px] font-bold">
            Sign up
          </span>
        </p>
      </div>

      <div className="w-1/2">
        <img src={image} alt="Login" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default Login;
