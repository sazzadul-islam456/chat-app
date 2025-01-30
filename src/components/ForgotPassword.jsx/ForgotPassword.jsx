import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (emailErr) setEmailErr("");
  };

  
  const handleSubmit = () => {
    let emailError = "";

    
    if (!email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }

    setEmailErr(emailError);

  
    if (!emailError) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent! Please check your inbox.");
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode.includes("auth/user-not-found")) {
            setEmailErr("No user found with this email address.");
          } else if (errorCode.includes("auth/invalid-email")) {
            setEmailErr("Invalid email address.");
          } else {
            toast.error("Failed to send password reset email. Please try again.");
          }
        });
    }
  };

  
  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-primary w-full h-screen">
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
        transition={Zoom}
      />
      
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-[600px] py-5 px-8 rounded shadow-lg">
          <h3 className="font-poppins-font text-2xl font-semibold">
            Forgot Password
          </h3>

          {/* Email Input */}
          <div className="relative mt-[32px]">
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full border-2 border-[#B8BACF] h-[60px] px-4 rounded-lg"
            />
            {emailErr && <p className="text-red-600 text-sm mt-2">{emailErr}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="bg-[#5F34F5] text-white w-1/2 h-[50px] rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Reset
            </button>

            <button
              onClick={handleBackToLogin}
              className="bg-gray-500 text-white w-1/2 h-[50px] rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
