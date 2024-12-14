import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className=" bg-[#b9c6ae]">
      <footer className="container !mx-auto justify-items-center footer text-base-content border-white opacity-70 border-b lg:px-20 py-8">
        <div className="hero-content w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-2">
          <img src={logo} alt="" className="" />
            <p className="w-auto lg:w-8/12 text-center text-base text-white/60 font-medium">
              Leading the way in cutting-edge technology and inovation.
            </p>
          </div>
        </div>
      </footer>

      <footer className="justify-items-center items-start footer text-base-content py-10 px-14">
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-white font-bold">Services</h6>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Product Support</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Order Tracking</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Shipping & Delivery</Link>
          
        </nav>
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-white font-bold">Company</h6>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">About us</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Career</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Contact</Link>
        </nav>
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-white font-bold">Legal</h6>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Terms of use</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Privacy policy</Link>
          <Link to={"/Terms&Condition"} className="link link-hover text-base text-white/60 font-normal">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;