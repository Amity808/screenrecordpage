import React from "react";
import edit from "../assets/images/edit.png";
import copy from "../assets/images/copy.png";
import telegram from "../assets/images/telegram.png";
import facebook from "../assets/images/facebook.png";
import whatsapp from "../assets/images/whatsapp.png";
import volume from "../assets/images/volume.png";
import setting from "../assets/images/setting.png";
import playcircle from "../assets/images/playcircle.png";
import arrowdown from "../assets/images/arrow-down.png";
import food from "../assets/video/food.mp4";
const VideoHeader = () => {
  return (
    <div className=" mt-[90px] max-md:mt-[60px] max-sm:mt-[30px] flex flex-row max-sm:flex-col">
      <div className=" flex flex-col w-[623px] mr-20 max-sm:mr-0 max-md:mr-0 max-sm:w-[350px]">
        <p className=" text-[#141414] text-[42px] max-md:text-[30px] max-sm:text-[20px] font-bold max-sm:font-medium ">
          Your video is ready!
        </p>
        <div className=" mt-[40px]">
          <p className="text-sm text-black">Name</p>
          <div className=" flex">
            <p className=" text-2xl max-md:text-lg text-[#413C6D] font-semibold">
              Untitled_Video_20232509
            </p>
            <img src={edit} alt="edit" className=" w-[32px] h-[32px] ml-3" />
          </div>
        </div>
        <div className=" mt-[64px] max-sm:mt-[30px] max-md:mt-[44px]">
          <p className=" text-xl font-semibold text-[#141414]">Video Url</p>
          <div className=" bg-[#e7e4e4] w-[500px]  h-[68px] max-md:h-[48px] max-md:w-[400px] max-sm:w-[250px] border-2 rounded-md flex flex-row items-center justify-around">
            <input
              type="url"
              name="url"
              id="url"
              className=" w-[390px] max-md:w-[150px]  h-[26px] outline-none bg-[#a8a8a8]"
            />
            <button className=" flex flex-row">
              <img src={copy} alt="copy" className=" w-[20px] h-[20px] mr-3 max-sm:mr-1 max-md:mr-1" />
              <p className=" text-[#120B48]">Copy</p>
            </button>
          </div>
        </div>
        <div className=" mt-[64px] max-sm:mt-[20px] max-md:mt-[40px]">
          <p className=" text-base font-semibold">Share your video </p>
          <div className=" flex gap-2 mt-[15px]">
            <div className=" flex w-[141px] max-md:w-[120px] max-sm:w-[100px] h-[48px] max-sm:h-[25] border-2 justify-center items-center rounded-md border-solid border-black">
              <img src={facebook} alt="fb" className="w-[20] h-[20px] mr-2 max-sm:mr-1" />
              <p>Facebook</p>
            </div>
            <div className=" flex w-[141px] h-[48px] border-2 justify-center items-center rounded-md border-solid border-black max-md:w-[120px] max-sm:w-[100px] max-sm:h-[25]">
              <img src={whatsapp} alt="wb" className="w-[20] h-[20px] mr-2 max-sm:mr-1" />
              <p>Whatsapp</p>
            </div>
            <div className=" flex w-[141px] h-[48px] border-2 justify-center items-center rounded-md border-solid border-black max-md:w-[120px] max-sm:w-[100px] max-sm:h-[25]">
              <img
                src={telegram}
                alt="tgram"
                className="w-[20] h-[20px] mr-2 max-sm:mr-1"
              />
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-r-2 border-solid mx-5 max-md:hidden">

      </div>
      <div className="">
        <div className=" border-solid border-2 rounded-lg  max-md:w-[575px] h-[503px] max-sm:w-[325px] max-sm:h-[273px] max-sm:mt-4">
          <video src={food} controlsList="play" />
          <div className=" flex flex-row justify-around items-center my-[24px]  max-md:my-[15px]">
            <p className="">0:30 / 3:00</p>
            <div className=" flex gap-4">
              <button className="flex flex-col items-center justify-center">
                <img src={playcircle} alt="" /> <p>play</p>
              </button>
              <button className="flex flex-col items-center justify-center">
                <img src={volume} alt="" /> <p>Volume</p>
              </button>
              <button className="flex flex-col items-center justify-center">
                <img src={setting} alt="" /> <p>Settings</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-[80px] max-sm:mt-[40px]">
          <p className=" text-[24px] font-semibold mb-[15px]">Transcript</p>
          <div className=" w-[169px] h-[35px] flex flex-row items-center border-2 border-solid ">
            <input type="text" className=" outline-none" />
            <img src={arrowdown} alt="arrow" className=" w-[20px] h-[20px]"/>
          </div>
        </div>
        <div>
          <div className="flex mt-[40px]">
            <p className=" mr-[6px] ">0.01</p>
            <span className="">
              <p className="">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
