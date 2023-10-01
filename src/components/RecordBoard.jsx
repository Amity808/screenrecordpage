import React, { useState } from "react";
import bin from "../assets/images/bin.png";
import Logo from "../assets/images/logo.png";
import pause from "../assets/images/pause.png";
import stop from "../assets/images/stop.png";
import pcamera from "../assets/images/pcamera.png";
import mic from "../assets/images/mic.png";
import red from "../assets/images/red.png";

const RecordBoard = () => {
  const [toggle, setToggle] = useState(false);
  const [stream, setStream] = useState(null)
  
  return (
    <div>
      <button
        type="button"
        onClick={() => setToggle(true)}
        className="inline-block ml-4 px-6 py-2.5  text-white leading-tight rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        <img src={Logo} alt="Logo" className=" w-[28px] h-[28px]" />
      </button>
      {toggle && (
        <div className=" border-4 border-solid w-[551px] h-[86px] flex flex-row justify-between px-4 items-center bg-black rounded-full text-white  gap-3 ">
          <p className=" text-xl">00:03:45</p>
          <img src={red} alt="red" className=" w-[10px] h-[10px] ml-[16px]" />
          <span className=" mr-3 border-r-2 border ml-3 h-[48px]"></span>
          <span className=" flex flex-col justify-center items-center">
            <img src={pause} alt=""  className=" w-[24px] h-[24px]"/>
            <p>Pause</p>
          </span>
          <span className=" flex flex-col justify-center items-center ">
            <img src={stop} alt=""  className=" w-[24px] h-[24px]"/>
            <p>Stop</p>
          </span>
          <span className=" flex flex-col justify-center items-center ">
            <img src={pcamera} alt=""  className=" w-[24px] h-[24px]"/>
            <p>Camera</p>
          </span>
          <span className=" flex flex-col justify-center items-center ">
            <img src={mic} alt=""  className=" w-[24px] h-[24px]"/>
            <p>Mic</p>
          </span>
          <span className=" flex flex-col justify-center items-center ">
            <img src={bin} alt=""  className=" w-[24px] h-[24px]"/>
            
          </span>
        </div>
      )}
    </div>
  );
};

export default RecordBoard;
