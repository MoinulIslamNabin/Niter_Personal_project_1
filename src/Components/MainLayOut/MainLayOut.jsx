import React from 'react';
import Navbar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayOut = () => {
    return (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          </>
    );
};

export default MainLayOut;