import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import "./heroSection.css"

function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-6 lg:mt-20">
        <h1 className="font-semibold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualSite builds tools{" "}
          <span className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            for developers.
          </span>
        </h1>
        <p className="flex justify-center items-center text-sm text-center mt-10 lg:mt-24 text-neutral-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          officia nobis odio unde delectus ratione asperiores voluptatum
          repudiandae. Quis doloribus dignissimos quod rem quibusdam
          necessitatibus sit id voluptates, facere nobis possimus.
        </p>
      </div>
      <div className="flex justify-center items-center mt-16 gap-8">
      <a href="#" className="px-4 py-2 rounded-md border">
              Documentation
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
             Start for free
            </a>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 lg:flex-row mb-20 mt-20">
        <video
        id="HeroSection"
          className="lg:w-2/5 w-96 border border-orange-500 rounded-lg shadow-orange-500 shadow "
          autoPlay
          loop 
          muted
          src={video1}
        ></video>
        <video
        id="HeroSection"
          className="lg:w-2/5 w-96 border border-orange-500 rounded-lg shadow-orange-500 shadow "
          autoPlay
          loop
          muted
          src={video2}
        ></video>
      </div>
    </>
  );
}

export default HeroSection;
