import React from 'react';
import Navbar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Drawer from '../Drawer/Drawer';
import { AuroraBackgroundDemo } from '../../BackGround';

const MainLayOut = () => {
    return (
        <>
          <Navbar></Navbar>
          <AuroraBackgroundDemo></AuroraBackgroundDemo>
          <Drawer></Drawer>
          <Outlet></Outlet>
          <Footer></Footer>
          </>
    );
};

export default MainLayOut;