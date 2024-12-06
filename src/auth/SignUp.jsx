import AuthNav from "./AuthNav";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <AuthNav />

      <div className="flex flex-col w-[500px] mx-auto justify-center">
        <div className="flex flex-col justify-center">
          <span className="font-bold flex justify-center text-3xl py-2">
            Create Your Account
          </span>
          <p className="font-normal py-2 text-xs text-center">
            Create a secure account with us to get started
          </p>
        </div>

        <div className="flex flex-row justify-center gap-10 py-4">
          <button className="flex flex-row gap-2 bg-[#F3F3F3] py-2 px-5 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={google} alt="home" className="w-5 h-5" />
            </div>
            <div className="px-2 mt-0.5 flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>

          <button className="flex flex-row gap-2 bg-[#F3F3F3] py-2 px-4 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={apple} alt="home" className="w-5 h-5" />
            </div>
            <div className="px-2 mt-0.5 flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>
        </div>

        <div className="flex flex-row justify-center py-3 gap-8">
          <span className="border w-40 h-0"></span>
          <div className="px-7 -mt-3">Or</div>
          <span className="border w-40 h-0"></span>
        </div>

        <div>
          <form className="flex flex-col justify-between gap-4  w-full">
            <div className="relative w-full xx:px-4 sm:px-0 flex flex-col gap-4 mx-auto">
              <div className="flex flex-row py-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-400 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-400 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="border border-gray-400 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
              </div>

              <div>
                <div className="absolute text-xs text-gray-600 right-8 bottom-28 w-5 h-5">
                  Show
                </div>
                <input
                  type="text"
                  placeholder="Password"
                  className="border border-gray-400 bg-[#F3F3F3] focus:bg-[#E0EEE0] focus:border-2 focus:border-[#359A35] w-full rounded-xl h-12 text-sm pl-4 text-[#1A0F28] focus:outline-none"
                />
              </div>

              <div className="flex justify-center font-medium text-xs">
                Forgot Password ?
              </div>

              <div className="flex flex-col justify-center w-full">
                <button
                  type="submit"
                  className="flex w-full gap-2 h-12 bg-[#359A35] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-xl py-2 px-4 text-white justify-center items-center"
                >
                  <div>Sign up</div>
                </button>
              </div>
            </div>

            <div className="">
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

              <p className="text-center text-xs py-3">
                Have an account?{" "}
                <Link to="/sign" className="text-[#359A35] text-xs ">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="text-center justify-end text-[#00000099] text-base">@2024-2025 Cropcrypt. All rights reserved.</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
