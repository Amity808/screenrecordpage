import React from "react";

const VideoFoot = () => {
  return (
    <div className=" flex  items-center justify-center flex-col mt-[48px]">
      <p className="text-[#141414] text-2xl font-semibold max-md:text-lg text-center">
        To ensure the availability and privacy of your video, <br /> we recommend
        saving it to your account.
      </p>
      <button className="  text-white bg-[#120B48] rounded-md w-[150px] h-[51px] mt-[40px] max-sm:mt-[15px]">Save Video</button>
      <button className=" text-[#141414]  rounded-md mt-[40px] max-sm:mt-[15px] flex flex-row gap-3 font-semibold text-[24px] max-sm:font-normal max-sm:text-[14px]"><p className=" text-[#7E7E7E]">Dont have an account?</p> Create account</button>
    </div>
  );
};

export default VideoFoot;
