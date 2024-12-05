import React, { useState } from "react";
import image from "../../assets/login.jpg";
import { PiEyeBold, PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (emailErr) setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (passwordErr) setPasswordErr("");
  };

  const handleSubmit = () => {
    let emailError = "";
    let passwordError = "";

    // Validate Email
    if (!email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }

    // Validate Password
    if (!password) {
      passwordError = "Please enter your password.";
    } else {
      if (!/[A-Z]/.test(password)) passwordError = "Use at least one uppercase letter.";
      else if (!/[a-z]/.test(password)) passwordError = "Use at least one lowercase letter.";
      else if (!/\d/.test(password)) passwordError = "Use at least one number.";
      else if (!/[@$!%*?&]/.test(password)) passwordError = "Use at least one special character.";
      else if (password.length < 8) passwordError = "Password must be at least 8 characters long.";
    }

    setEmailErr(emailError);
    setPasswordErr(passwordError);
  };

  return (
    <div className="flex justify-between overflow-hidden pt-10">
      {/* Left Section */}
      <div className="w-1/2 pl-[190px] mt-[100px]">
        <p className="text-[35px] text-[#11175D] font-bold mb-4">Login to your account!</p>

        {/* Google Login Button */}
        <div className="cursor-pointer mt-[29px] w-[220px] h-[62px] border-2 rounded-xl flex items-center justify-center border-[#B8BACF] hover:shadow-md">
          <FcGoogle className="text-2xl" />
          <p className="pl-2">Login with Google</p>
        </div>

        {/* Email Input */}
        <div className="relative mt-[32px]">
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-[368px] border-2 border-[#B8BACF] py-3 px-4 rounded-lg"
          />
          {emailErr && <p className="text-red-600 text-sm mt-2">{emailErr}</p>}
        </div>

        {/* Password Input */}
        <div className="relative mt-[60px]">
          <input
            value={password}
            onChange={handlePassword}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            aria-label="Password"
            className="w-[368px] border-2 border-[#B8BACF] py-3 px-4 rounded-lg"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle Password Visibility"
            role="button"
            aria-pressed={showPassword}
            className="absolute top-[12px] right-[16px] text-xl cursor-pointer text-[#11175D]"
          >
            {showPassword ? <PiEyeBold /> : <PiEyeClosedFill />}
          </div>
          {passwordErr && <p className="text-red-600 text-sm mt-2">{passwordErr}</p>}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-[368px] py-3 mt-[35px] rounded-lg hover:bg-blue-700"
        >
          Login to Continue
        </button>

        {/* Sign-Up Link */}
        <p className="mt-[20px] text-sm">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img src={image} alt="Login" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default Login;
