import React from "react";
import { testimonials } from "../Constants";

function Testimonial() {
  return (
    <>
      <div id="HeroSection1" className="mb-10 lg:mb-20">
        <div id="HeroSection1" className="flex justify-center items-center mb-10 lg:mb-20">
          <h5 className="text-center text-3xl sm:text-4xl lg:text-5xl tracking-wide">
            What people are saying
          </h5>
        </div>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((items, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 border text-sm border-neutral-700 font-thin">
                <p>{items.text}</p>
                <div className="mt-8 flex items-start">
                  <img className="w-16 rounded-full ring-2 ring-offset-2 ring-offset-transparent ring-orange-600" src={items.image} alt="user/img" />
                  <div className="ml-6">
                  <p className=" text-white text-base font-normal">{items.user}</p>
                  <p className="mt-1 text-sm font-normal text-neutral-400 tracking-wide">{items.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
