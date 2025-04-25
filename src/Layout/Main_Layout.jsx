import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Fixed_Component/Navbar";
import Footer from "../Fixed_Component/Footer";

export default function Main_Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* jdhsdfjds */}
      <Footer />
    </div>
  );
}
