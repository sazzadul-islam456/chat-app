import React, { useState } from "react";
import image from "../../assets/login.jpg";
import { PiEyeBold, PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification, // Import sendEmailVerification
} from "firebase/auth";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../Slices/userSlice";

const Login = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

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

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user; // `result.user` contains the user information
        dispatch(userLoginInfo(user)); // Fixed: Pass `user` directly
        toast.success(`Welcome, ${user.displayName}!`);
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      })
      .catch((error) => {
        console.error("Google Login Error: ", error);
        toast.error("Google login failed. Please try again.");
      });
  };

  const handleSubmit = () => {
    let emailError = "";
    let passwordError = "";
    setEmail("");
    setPassword("");

    if (!email) {
      emailError = "Please enter your email.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!password) {
      passwordError = "Please enter your password.";
    }

    setEmailErr(emailError);
    setPasswordErr(passwordError);

    if (!emailError && !passwordError) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(userLoginInfo(user));
          localStorage.setItem("userLoginInfo", JSON.stringify(user));

          if (!user.emailVerified) {
            // Send verification email if not verified
            sendEmailVerification(user)
              .then(() => {
                toast.error("Please verify your email. A verification email has been sent.");
              })
              .catch((error) => {
                console.error("Error sending verification email:", error);
                toast.error("Failed to send verification email.");
              });
          } else {
            toast.success("Login successful!");
            setTimeout(() => {
              navigate("/Home");
            }, 1000);
          }
        })
        .catch((error) => {
          console.error("Login error: ", error);
          const errorCode = error.code;
          if (errorCode.includes("auth/user-not-found")) {
            setEmailErr("No user found with this email.");
          } else if (errorCode.includes("auth/wrong-password")) {
            setPasswordErr("Incorrect password. Please try again.");
          } else {
            toast.error("Failed to log in. Please try again.");
          }
        });
    }
  };

  return (
    <div className="flex justify-between overflow-hidden h-screen">
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

      {/* Left Section */}
      <div className="w-1/2 pl-[190px] mt-[100px] h-full">
        <p className="text-[35px] text-[#11175D] font-bold mb-4">
          Login to your account!
        </p>

        {/* Google Login Button */}
        <div
          onClick={handleGoogleLogin}
          className="cursor-pointer mt-[29px] w-[220px] h-[62px] border-2 rounded-xl flex items-center justify-center border-[#B8BACF] hover:shadow-md"
        >
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
            className="w-[425px] border-2 border-[#B8BACF] h-[78px] px-4 rounded-lg"
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
            className="w-[425px] border-2 border-[#B8BACF] h-[78px] px-4 pr-12 rounded-lg"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle Password Visibility"
            role="button"
            aria-pressed={showPassword}
            className="absolute top-1/2 right-[160px] -translate-y-1/2 transform text-xl cursor-pointer text-[#11175D]"
          >
            {showPassword ? <PiEyeBold /> : <PiEyeClosedFill />}
          </div>
          {passwordErr && (
            <p className="text-red-600 text-sm mt-2">{passwordErr}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-[#5F34F5] text-white w-[425px] h-[81px] mt-[30px] rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <p className="font-poppins-font font-semibold text-[20px]">
            Login to Continue
          </p>
        </button>
        <p className="mt-3 bg-[#EA6C00] text-center p-2 w-[425px] text-white rounded">
          <Link to="/forgotpassword">Forget Password</Link>
        </p>

        {/* Sign-Up Link */}
        <p className="mt-[20px] pl-[15px] text-sm text-[13px] cursor-pointer">
          Don’t have an account?{" "}
          <Link
            to="/Registration"
            className="text-[#EA6C00] cursor-pointer font-poppins-font text-[14px] font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full">
        <img src={image} alt="Login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
