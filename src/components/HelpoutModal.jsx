import React, { useState } from "react";
import Cancel from "../assets/images/cancel.png";
import Logo from "../assets/images/logo.png";
import HVideo from "../assets/images/h-video.png";
import Audio from "../assets/images/audio.png";
const HelpoutModal = () => {
 
  return (
    <div>
      <div className="w-[400px] h-[225px] rounded-md border-2 py-4 shadow-sm">
        <div className=" flex justify-between mt-[4px] m-[10px]">
          <p className=" text-[#141414] text-sm">HelpMeOut wants to</p>
          <img
            src={Cancel}
            alt="cancel"
            className=" w-[20px] h-[20px]"
            onClick={() => setToggle(false)}
          />
        </div>
        <div className=" m-[10px]">
          <div className=" flex flex-row mt-[21px]">
            <img
              src={HVideo}
              alt="video"
              className=" w-[24px] h-[24px] mr-[16px]"
            />
            <p className=" text-sm">Use your camera</p>
          </div>
          <div className=" flex flex-row mt-[21px]">
            <img
              src={Audio}
              alt="video"
              className=" w-[24px] h-[24px] mr-[16px]"
            />
            <p className=" text-sm">Use your camera</p>
          </div>
        </div>
        <div className=" mt-[35px] float-right mr-[10px]">
          <button className="w-[64px] h-[32px] border border-1 border-solid rounded-md mr-[20px]">
            Allow
          </button>
          <button className="w-[64px] h-[32px] border border-1 border-solid rounded-md">
            Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpoutModal;
