import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
