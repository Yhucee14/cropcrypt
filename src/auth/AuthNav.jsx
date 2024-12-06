import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const AuthNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex px-0 py-4 justify-between cursor-pointer">
      {isMobile ? (
        <div className="md:hidden shadow-md py-2 px-4 z-50 flex justify-between w-full items-center">
          <div className=" flex flex-row py-2 px-1">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className=" w-10 h-7" />
              <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <button onClick={toggleMobileMenu}>
            <img
              src={isMobileMenuOpen ? close : menu}
              alt="menu"
              className="h-6 w-6"
            />
          </button>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-20 left-0 w-full rounded-lg bg-white shadow-2xl md:hidden z-10">
              <div className="flex flex-col px-4 py-4 justify-between">
              <Link to="/signin">
              <button className="flex bg-button-green hover:border-2 rounded-3xl py-2 px-1 text-white justify-center items-center">
                <div className="px-3 ">Sign In</div>
              </button>
            </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-between px-8 w-screen">
          <div className=" flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className="w-14 h-11" />
              <div className="px-2 font-extrabold text-xl text-gradient-logo flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center lg:gap-8">
            <Link to="/signin">
              <button className="flex bg-button-green hover:border-2 rounded-3xl py-2 px-1 text-white justify-center items-center">
                <div className="px-3 ">Sign In</div>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
