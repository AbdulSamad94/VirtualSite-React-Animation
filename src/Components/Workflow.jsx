import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../Constants";
import code from "../assets/code.jpg";
function Workflow() {
  return (
    <>
      <div className="relative flex justify-center min-h-[800px]">
        <div>
          <div id="HeroSection" className="text-center">
            <span className="text-orange-600 bg-neutral-900 rounded-full px-3 py-2 text-sm font-medium uppercase">
              WorkFlows
            </span>
          </div>
          <div id="HeroSection" className="flex justify-center items-center mt-10 lg:mt-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide font-light text-center">
              Accelerate your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                coding workflows
              </span>
            </h1>
          </div>
          <div  className="flex mt-10 lg:mt-20 flex-wrap justify-center">
            <div id="HeroSection" className="p-2 w-full lg:w-1/2 flex justify-center items-center">
              <img src={code} alt="code/pic" />
            </div>
            <div id="HeroSection" className="pt-12 w-full lg:w-1/2">
              {checklistItems.map((itmes, index) => (
                <div key={index} className="flex mb-12">
                  <div className="text-green-600 mx-6 bg-neutral-900 h-10 w-10 rounded-full p-2 justify-center items-center flex">
                    <CheckCircle2/>
                  </div>
                  <div>
                    <h5 className="text-xl mt-1 mb-2">{itmes.title}</h5>
                    <p className="text-neutral-500">{itmes.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
