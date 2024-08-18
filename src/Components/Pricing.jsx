import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../Constants";
import "./heroSection.css"

function Pricing() {
  return (
    <>
      <div className="mb-10 lg:mb-20">
        <div className="flex justify-center items-center flex-col mb-10 ">
          <div id="HeroSection" className="text-sm uppercase text-center tracking-wider text-orange-600 bg-neutral-900 rounded-full w-20 px-3 py-2">
            Pricing
          </div>
          <div id="HeroSection" className="my-10 lg:my-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide text-center">
              Pricing offers{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
                for you.
              </span>
            </h1>
          </div>
        </div>
        <div id="HeroSection" className="flex flex-wrap">
          {pricingOptions.map((itmes, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="border border-neutral-700 p-10 rounded-xl">
                <p className="text-4xl mb-7">
                  {itmes.title}
                  {itmes.title === "Pro" && (
                    <span className="text-xs sm:text-base lg:text-base ml-2 bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent font-medium uppercase">
                      (Our Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-10">
                  <span className="text-5xl mt-6 mr-2">{itmes.price}</span>
                  <span className="text-neutral-400 tracking-tight">
                    /Month
                  </span>
                </p>
                <ul>
                  {itmes.features.map((items1, index) => (
                    <div key={index} className="mt-10 flex items-center">
                      <div className="text-orange-500">
                        <CheckCircle2 />
                      </div>
                      <div className="ml-3 text-neutral-300">{items1}</div>
                    </div>
                  ))}
                </ul>
                <div className="mt-8 text-center uppercase border border-neutral-400 px-4 py-2 rounded-md duration-300 tracking-wider hover:bg-neutral-900">
                <a
                  href="#"
                  
                >
                  Subscribe
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
