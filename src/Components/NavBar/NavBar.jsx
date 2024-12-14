import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user-1.png";
import Routine from "../Home/Routine/Routine";
import Docs from "../Home/Docs/Docs";

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
        <div className="navbar container justify-center mx-auto py-3 pr-6">
          
          <div className="navbar-center">
            <nav className="menu menu-horizontal px-1 gap-4">{links}</nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
