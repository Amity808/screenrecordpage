import React from "react";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" w-full h-[5.25rem] flex flex-row px-[6.25rem] py-[0.75rem] items-center justify-between border-b ">
        <div className=" flex flex-row items-center">
          <img src={Logo} alt="HelpMeOut" className=" pr-2" />
          <p className="">HelpMeOut</p>
        </div>
        <div className=" flex flex-row max-sm:hidden">
          <p className=" pr-[40px]">Features</p>
          <p>How it Works</p>
        </div>
        <div className=" max-sm:hidden">
          <p>Get Started</p>
        </div>
        <div className="md:hidden  mt-3">
          <button className="text-dark" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
        <div className="fixed z-20 top-0 bg-[#282e82] 
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center">
          <button
            className="text-white absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-row items-center">
              <img src={Logo} alt="HelpMeOut" className=" pr-2" />
              <p className="">HelpMeOut</p>
            </div>
            <div className=" flex flex-col">
              <p className=" pr-[40px]">Features</p>
              <p>How it Works</p>
            </div>
            <div>
              <p>Get Started</p>
            </div>
          </div>
         </div>
        </>
      )}
    </>
  );
};

export default NavBar;
