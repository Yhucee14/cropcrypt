import { useState } from "react";
import AuthNav from "./AuthNav"
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const Signin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <div className="overflow-x-hidden">
        <AuthNav />

        <div className="flex flex-col ss:w-[500px] mx-auto pt-2 ss:pt-0 ss:justify-center">
        <div className="flex flex-col  justify-center ">
          <span className="font-bold flex justify-center text-2xl ss:text-3xl py-2">
          Sign in to Cropcrypt
          </span>
          <p className="font-normal flex justify-center py-2 text-xs ss:text-sm ss:text-center">
          Please fill in your details to gain secured access to your account
          </p>
        </div>

        <div className="flex flex-row justify-center ss:gap-10 gap-2 py-4">
          <button className="flex flex-row ss:gap-2 transition-all duration-300 hover:bg-[#cecbcb] bg-[#F3F3F3] py-2 ss:px-5  px-2 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={google} alt="home" className="w-5 h-5" />
            </div>
            <div className="ss:px-2 px-1 py-2 ss:py-1 text-xs ss:text-sm flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>

          <button className="flex flex-row ss:gap-2 transition-all duration-300 hover:bg-[#cecbcb] bg-[#F3F3F3] py-2 px-2 ss:px-4 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={apple} alt="home" className="w-5 h-5" />
            </div>
            <div className="ss:px-2 px-1 py-2 ss:py-1 text-xs ss:text-sm flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>
        </div>

        <div className="flex flex-row justify-center py-3 ss:gap-8">
          <span className="border w-20 ss:w-40 h-0"></span>
          <div className="px-6  font-light text-[#1a0f28b3] -mt-3">Or</div>
          <span className="border w-20 ss:w-40 h-0"></span>
        </div>

        <div>
          <form className="flex flex-col justify-between gap-4  w-full">
            <div className="relative w-full xx:px-4 sm:px-0 flex flex-col gap-8 mx-auto">

              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="border border-gray-400 transition-all duration-300 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="border border-gray-400 transition-all duration-300 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>

              <div className="flex px-1 ss:px-0 ss:py-0 ss:justify-center font-medium text-xs">
                Forgot Password ? <Link to='forgotPassword' className="px-1 cursor-pointer text-[#3d80de] underline"> Click here.</Link>
              </div>

              <div className="flex flex-col justify-center w-full">
                <button
                  type="submit"
                  className="flex w-full gap-2 h-12 transition-all duration-300 bg-[#359A35] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-xl py-2 px-4 text-white justify-center items-center"
                >
                  <div>Sign in</div>
                </button>
              </div>
            </div>

            <div className="px-5">
              <p className="text-[#1A0F28] text-xs text-center">
                By signing in, you agree to Cropcrypt’s
                <a
                  href="URL"
                  target="target"
                  className="text-[#3d80de] underline text-xs"
                >
                  {" "}
                  Terms of Service and Privacy Policy.
                </a>
              </p>

              <p className="text-center text-xs py-5 ss:py-3">
                Have an account?{" "}
                <Link to="/signin" className="text-[#359A35] underline cursor-pointer text-xs ">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="text-center  text-[#00000099] text-base">
              @2024-2025 Cropcrypt. All rights reserved.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin