import React from "react";
import logo from "/images/astronot.png";
import { FaFacebook } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="">
      <div>
        <div className="  contaainer mx-auto max-w-7xl  h-[800px] flex justify-center items-center ">
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
              <FaFacebook className=" mt-6 text-2xl text-blue-700" />
            </div>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
