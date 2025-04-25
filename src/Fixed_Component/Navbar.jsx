import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4">
      <div>
        {/* logo */}
        <h1 className="text-4xl text-blue-900 font-bold">Sifat</h1>
      </div>
      <div className="flex flex-row gap-4">
        {/* navigation */}
        <Link to="/" className="text-xl font-semibold">
          Home
        </Link>
        <Link to={"/about"} className="text-xl font-semibold cursor-pointer">
          About
        </Link>
        <p className="text-xl font-semibold">Contact</p>
      </div>
      <div>
        {/* button */}
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </section>
  );
}
