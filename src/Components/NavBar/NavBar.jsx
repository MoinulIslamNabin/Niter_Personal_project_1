import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/lo1.png";

const Navbar = () => {
  const links = (
    <>
      <a className="cursor-pointer text-xl text-black font-bold georama">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-36 md:w-52" />
        </Link>
      </a>
    </>
  );

  return (
    <>
     <>
      {/* <div className=" bg-gradient-to-l from-gray-900 via-black to-gray-900 fixed top-0 z-40 w-full"> */}
      <div className=" bg-transparent py-4 fixed top-0 z-40 w-full">
        <div className="navbar container justify-between mx-auto py-1">
          <div className="navbar-start">
            <nav className="menu menu-horizontal px-1 gap-4">{links}</nav>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 justify-end">
              <li>
                <a
                  href="#routine-section"
                  className="irish-grover font-bold text-sm md:text-xl text-[#2CE1FF] hover:text-white hover:scale-110 transition-all duration-300"
                  style={{
                    textShadow: "0px 4px 8px #000B2B80, 0px 4px 4px #9F24A6",
                  }}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                 href="#docs-section"
                  className="irish-grover font-bold text-sm md:text-xl text-[#2CE1FF] hover:text-white hover:scale-110 transition-all duration-300"
                  style={{
                    textShadow: "0px 4px 8px #000B2B80, 0px 4px 4px #9F24A6",
                  }}
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default Navbar;
