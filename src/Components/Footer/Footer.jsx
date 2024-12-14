import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import fb from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import mail from "../../assets/gmail.png";
import me from "../../assets/me.jpg";

const Footer = () => {
  return (
    <div className=" bg-[#b9c6ae]">
      <footer className="container !mx-auto justify-items-center footer text-base-content border-white opacity-70 border-b lg:px-20 py-8">
        <div className="hero-content w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-2">
            <img src={logo} alt="" className="" />
            <p className="w-auto lg:w-8/12 text-center text-base text-black font-medium">
              Website Under development. If you are a Web Developer/Web designer
              please contact me.
            </p>
          </div>
        </div>
      </footer>

      <footer className="justify-items-center items-start footer text-base-content py-10 px-14">
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-white font-bold">
            Socials
          </h6>
          <div className="tooltip grid grid-flow-col gap-4">
            <Link
              target="_blank"
              to={"https://www.facebook.com/luniom.moinul/"}
            >
              <img src={fb} alt="" />
            </Link>
            <Link
              target="_blank"
              to={"https://www.instagram.com/moinulislam779"}
            >
              <img src={insta} alt="" />
            </Link>
            <Link target="_blank" to={"https://mail.google.com"}>
              <img src={mail} alt="" />
            </Link>
          </div>
        </nav>

        <nav className="justify-items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={me} />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
