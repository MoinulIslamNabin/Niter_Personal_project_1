import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";


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
      <div className=" bg-gradient-to-l from-blue-500 via-cyan-200 to-blue-500 fixed top-0 z-40 w-full">
        <div className="navbar container justify-center mx-auto py-1 ">
          
          <div className="navbar-center">
            <nav className="menu menu-horizontal px-1 gap-4">{links}</nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
