import React from "react";
import Navbar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import { AuroraBackgroundDemo } from "../../BackGround";
import Routine from "../Home/Routine/Routine";
import Docs from "../Home/Docs/Docs";

const MainLayOut = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="hidden md:block">
        <AuroraBackgroundDemo></AuroraBackgroundDemo>{" "}
      </div>
        
      <div className="block md:hidden pt-24 w-full max-w-full overflow-x-hidden">
          <div id="routine-section">
            <Routine />
          </div>
          <div id="docs-section">
            <Docs />
          </div>
        </div>

      <Drawer></Drawer>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayOut;
