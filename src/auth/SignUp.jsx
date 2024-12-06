import AuthNav from "./AuthNav";
import google from '../assets/google.png'
import apple from '../assets/apple.png'

const SignUp = () => {
  return (
    <div>
      <AuthNav />

      <div className="flex flex-col justify-center pt-14">
        <div className="flex flex-col justify-center">
          <span className="font-bold flex justify-center text-3xl py-3">Create Your Account</span>
          <p className="font-normal  text-xs text-center">
            Create a secure account with us to get started
          </p>
        </div>

        <div className="flex flex-row justify-center gap-4 py-6"> 
          <button className="flex flex-row gap-2 bg-[#F3F3F3] py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={google} alt="home" className="w-5 h-5" />
            </div>
            <div className="px-2 mt-0.5 flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>
        
          <button className="flex flex-row gap-2 bg-[#F3F3F3] py-4 px-5 rounded-xl">
            <div className="flex justify-center items-center py-1">
              <img src={apple} alt="home" className="w-5 h-5" />
            </div>
            <div className="px-2 mt-0.5 flex font-medium justify-center items-center">
              Sign in with Google
            </div>
          </button>
        </div>

        <div className="flex flex-row justify-center gap-8">
          <hr className="w-2 h-2"/> hh
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
