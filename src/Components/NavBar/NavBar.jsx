import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user-1.png";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isService = location.pathname === "/Services";
  const isTerms = location.pathname === "/Terms&Condition";
  const isProfile = location.pathname === "/Profile";
  const isDynamic = location.pathname === "/Service/:ServiceId";

  useEffect(() => {
    const delay = setTimeout(() => {
      if (isHome || isService || isProfile || isTerms || isDynamic) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [isHome, isService, isProfile, isTerms, isDynamic]);

  const links = (
    <>
      <a className="cursor-pointer text-xl text-black font-bold georama">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-52" />
        </Link>
      </a>
    </>
  );

  return (
    <>
      <div className=" bg-[#b9c6ae] fixed top-0 z-50 w-full">
        <div className="navbar container justify-between lg:justify-center mx-auto py-3 pr-6">
          <div className="navbar-start lg:hidden">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#eec044"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#140d0d] text-base-content min-h-full w-80 p-4">
                  {links}
                </nav>
              </div>
            </div>
        
          </div>
          <div className="navbar-center">
            <nav className="menu menu-horizontal px-1 gap-4">{links}</nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
