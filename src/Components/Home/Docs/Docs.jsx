import React from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <>
      <div className="hero bg-transparent ">
        <div className="hero-content flex-row-reverse">
          <div className="lg:h-screen container mx-auto py-8 flex flex-col flex-wrap gap-4 justify-center content-end">
            {/* notes component and route replaced by drive link */}
            <Link
              target="_blank"
              to={
                "https://drive.google.com/drive/folders/158vArE9jO9wDeNfGKh46dLQgOS454SMK"
              }
              className="btn border-white hover:border-white bg-transparent font-medium text-white transition-colors transition-bg duration-300 ease-in-out hover:bg-gradient-to-tl hover:from-blue-600 hover:via-transparent hover:to-blue-600"
            >
              NCS 14 Drive
            </Link>

            <Link
              target="_blank"
              to={
                "https://drive.google.com/drive/folders/1LwQv1YLCjmE7kgWaoX-jYaCHFbdlDigm"
              }
              className="btn border-white hover:border-white bg-transparent font-medium text-white transition-colors transition-bg duration-300 ease-in-out hover:bg-gradient-to-tl hover:from-blue-600 hover:via-transparent hover:to-blue-600"
            >
              1st Semester Fundamentals
            </Link>
          </div>
          <div>
            <h1
              className="text-5xl font-bold text-white luckiest-guy"
              style={{
                textShadow: "0px 4px 8px #000B2B80, 0px 4px 4px #9F24A6",
              }}
            >
              Every Document you will ever need!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
