import { useState, useEffect } from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const AuthNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
    <div className="flex px-2 py-4 justify-between cursor-pointer">
      {isMobile ? (
        <div className="md:hidden shadow-md py-2 z-50 flex justify-between w-full items-center">
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
              <div className="flex flex-col px-4 justify-between">
                <Link
                  to="/"
                  className={`flex md:px-2 font-medium border-b xx:py-3 md:py-0 gap-2 lg:px-2 ${
                    isActive("/") ? "text-green-600" : "text-[#736D6D]"
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={home}
                      alt="home"
                      className={`w-5 h-5 ${
                        isActive("/") ? "filter-green" : ""
                      }`}
                    />
                  </div>
                  <div className="px-2 mt-0.5 fon flex justify-center items-center">
                    Home
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-between px-4 w-screen">
          <div className=" flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className="w-14 h-11" />
              <div className="px-2 font-extrabold text-xl text-gradient-logo flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center lg:gap-8">
            <Link to="/invest">
              <button className="flex bg-button-green hover:bg-gray-100 rounded-3xl py-2 px-1 text-white justify-center items-center">
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
