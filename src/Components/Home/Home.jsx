import React, { useState } from "react";
import Routine from "./Routine/Routine";
import Docs from "./Docs/Docs";
import "./Home.css";

const Home = () => {
  const [isActive, setIsActive] = useState("docs");

  return (
    <>
      <div className=" mt-[4.5rem] md:mt-[6rem]">
        <div
          role="tablist"
          className=" pt-4 flex gap-4 justify-center items-center"
        >
           <button
            onClick={() => setIsActive("docs")}
            className={`text-base font-bold bg-transparent ${
              isActive === "docs"
                ? "  underline text-[#140d0d] "
                : " text-[#b9c6ae] nav-hover"
            }`}
          >
            Docs
          </button>
          <button
            onClick={() => setIsActive("routine")}
            className={`bg-transparent text-base font-bold ${
              isActive === "routine"
                ? " underline text-[#140d0d] "
                : "text-[#b9c6ae] nav-hover"
            }`}
          >
            Routine
          </button>
        </div>
      </div>
      {isActive === "routine" && <Routine />}
      {isActive === "docs" && <Docs />}
    </>
  );
};

export default Home;
