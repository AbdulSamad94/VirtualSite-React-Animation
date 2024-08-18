import React from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../Constants";

function Navbar() {
  const [openHamBurger, setOpenHamBurger] = useState(false);

  const handleClick = () => {
    setOpenHamBurger(!openHamBurger);
  };
  return (
    <>
      <nav className="sticky h-14 border-neutral-700/80 border-b top-0 z-50 backdrop-blur-lg">
        <div className="flex justify-between items-center px-7">
          <div className="flex justify-around items-center flex-shrink-0">
            <img className="w-14 h-14 mr-2" src={logo} alt="logo" />
            <span className="text-sm tracking-tight mt-1">Virtual-Site</span>
          </div>
          <div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((items, index) => (
                <li
                  className=" tracking-wider hover:text-orange-400 duration-300 mt-1 after:content-normal after:block after:w-0 after:h-1 after:bg-orange-500 after:rounded-xl after:m-auto after:duration-300 hover:after:w-full"
                  key={index}
                >
                  <a className="text-lg" href="/">
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-center items-center space-x-12 text-sm ml-12">
            <a href="#" className="px-4 py-2 rounded-md border">
              Sign up
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create An Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end mt-1">
            <button onClick={handleClick}>
              {openHamBurger ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {openHamBurger && (
          <div className="fixed right-0 z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="flex gap-5 flex-col">
              {navItems.map((items, index) => (
                <li className="text-left after:content-normal after:block after:w-0 after:h-1 after:bg-orange-500 after:rounded-xl after:m-auto after:duration-300 hover:after:w-full" key={index}>
                  <a className="text-base" href={items.href}>
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-5 mt-10 text-sm">
            <a href="#" className="px-4 py-2 rounded-md border">
              Sign up
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create An Account
            </a>
          </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
