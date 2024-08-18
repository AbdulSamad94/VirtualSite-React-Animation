import React from "react";
import { features } from "../Constants";
import "./heroSection.css"
function Feature() {
  return (
    <>
      <div id="HeroSection1" className="relative border-b border-neutral-800 min-h-[700px]">
        <div  className="text-center">
          <span  className="bg-neutral-900 px-3 py-2 text-orange-700 rounded-full text-sm font-medium uppercase h-6">
            Features
          </span>
          <h2  className="text-center text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide font-light">
            Easily build{" "}
            <span className="bg-gradient-to-r from bg-orange-500 to-orange-800 bg-clip-text text-transparent">
              your code.
            </span>
          </h2>
        </div>
        <div   className="flex flex-wrap justify-center items-center mt-10 lg:mt-24">
          {features.map((items, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-600 justify-center items-center rounded-full">
                  {items.icon}
                </div>
                <div>
                  <h5 className="flex m-2 mt-1 mb-6 text-xl">
                    {items.text}
                  </h5>
                  <p className="flex justify-center items-center text-sm text-neutral-500 mb-20 p-2">{items.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feature;
