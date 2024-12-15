import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import fb from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import git from "../../assets/github.png";
import mail from "../../assets/gmail.png";
import me from "../../assets/me.jpg";

const Footer = () => {
  return (
    <div className=" bg-[#b9c6ae]">
      <footer className="container !mx-auto justify-items-center footer text-base-content border-white opacity-70 border-b lg:px-20 py-8">
        <div className="hero-content w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-2">
            <img src={logo} alt="" className="md:w-auto w-3/4" />
            <p className="w-auto lg:w-8/12 text-center text-base text-black font-medium">
              Website Under development. If you are a Web Developer/Web designer
              please contact me.
            </p>
          </div>
        </div>
      </footer>

      <footer className="justify-items-center items-start footer text-base-content py-6 md:py-10 px-4 md:px-14">
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-base md:text-lg !text-white font-bold">
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
            <Link target="_blank" to={"https://github.com/MoinulIslamNabin"}>
              <img src={git} alt="" />
            </Link>
          </div>
        </nav>

        <nav className="flex gap-4 justify-center items-center">
          <div className="flex flex-col">
            <h6 className="footer-title opacity-100 text-base md:text-lg !text-white font-bold">
              Moinul Islam Nabin
            </h6>

            <div className="flex justify-center items-center gap-3">
              <Link target="_blank" to={"https://mail.google.com"}>
                <img src={mail} alt="" className="w-6" />
              </Link>
              <p className="text-xs text-black/80">
                moinul.islam.nabin779@gmail.com
              </p>
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 md:w-16 rounded-full">
              <img src={me} />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
