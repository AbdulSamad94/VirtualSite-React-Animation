import React from "react";
import { resourcesLinks, platformLinks, communityLinks} from "../Constants";

function Footer() {
  return (
    <>
      <div id="HeroSection" className="border-t border-neutral-700">
        <div className="mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          <div>
            <h1 className="text-lg font-semibold mb-4 tracking-wider">Resources</h1>
              <ul>
                {resourcesLinks.map((itmes, index) => (
                  <div key={index} className="py-1">
                    <a href="" className="text-sm text-neutral-300 font-light tracking-wider">
                        {itmes.text}
                    </a>
                  </div>
                ))}
              </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold mb-4 tracking-wider">Platforms</h1>
            <ul>
                {platformLinks.map((itmes, index)=>(
                    <div key={index} className="py-1">
                        <a href={itmes.href} className="text-sm text-neutral-300 font-light tracking-wider">
                            {itmes.text}
                        </a>
                    </div>
                ))}
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold mb-4 tracking-wider">Community</h1>
            <ul>
                {communityLinks.map((itmes, index)=>(
                    <div key={index} className="py-1">
                        <a href="" className="text-sm text-neutral-300 font-light tracking-wider">
                            {itmes.text}
                        </a>
                    </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center mb-1 border-t border-neutral-700 py-1 text-center mt-10 lg:mt-20">
            <p className="text-xs font-light tracking-wider mt-4">Copyright&copy;AbdulSamadSiddiqui.2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
