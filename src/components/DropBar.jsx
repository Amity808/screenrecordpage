import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Cancel from "../assets/images/cancel.png";
import Setting from "../assets/images/setting.png";
import Monitor from "../assets/images/monitor.png";
import Tablet from "../assets/images/tablet.png";
import camera from "../assets/images/camera.png";
import audio from "../assets/images/audio.png";
import togglebutton from "../assets/images/togglebutton.png";

const DropBar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenStream, setScreenStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);

  const startCapture = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const combinedStream = new MediaStream([...screenStream.getTracks(), ...audioStream.getTracks()]);
      setScreenStream(combinedStream);

      // Clear recordedChunks and mediaRecorder when starting a new capture
      setRecordedChunks([]);
      setMediaRecorder(null);
      setRecording(false);
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };


  const startRecording = () => {
    try {
      const recorder = new MediaRecorder(screenStream);
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: 'video/webm' });
        setRecordedChunks(chunks);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  return (
    <div className="">
      
        <div className="w-[300px] h-[439px] shadow-2xl rounded-xl py-3 px-4 shadow-neutral-500">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center">
              <img src={Logo} alt="Logo" className=" mr-2" />
              <p>HelpMeOut</p>
            </div>
            <div className=" flex">
              <img
                src={Setting}
                alt="setting"
                className=" w-[20px] h-[20px] mr-2"
              />
              <img
                src={Cancel}
                alt="cancel"
                className=" w-[20px] h-[20px]"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          <div className=" w-[255px] h-[32px] text-sm font-normal mt-[16px]">
            <p>
              This extension helps you record <br /> and share help videos with
              ease.
            </p>
          </div>
          <div className=" flex flex-row items-center justify-around mt-[32px]">
            <div className=" flex flex-col justify-center items-center text-center">
              <img src={Monitor} alt="monitor" className=" w-[32px] h-[32px]" />
              <p className=" text-sm">Full Screen</p>
            </div>
            <div className=" flex flex-col justify-center items-center text-center">
              <img src={Tablet} alt="tablet" className=" w-[32px] h-[32px]" />
              <p className=" text-sm">Current Tab</p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center mt-4">
            <div className="w-[252px] h-[48px] border-2 border-solid rounded-2xl border-[#120B48] flex justify-around items-center">
              <div className=" flex">
                <img
                  src={camera}
                  alt="Camera"
                  className=" w-[24px] h-[24px] pr-2"
                />
                <p>Camera</p>
              </div>
              <span>
                <img src={togglebutton} alt="" />
              </span>
            </div>
            <div className="w-[252px] h-[48px] border-2 border-solid rounded-2xl border-[#120B48] flex justify-around items-center mt-5">
              <div>
                <img src={audio} alt="audio" className=" w-[24px] h-[24px]" />
                <p>Audio</p>
              </div>
              <span>
                <img src={togglebutton} alt="" />
              </span>
            </div>
            <button className=" bg-[#120B48] text-base w-[252px] h-[51px] text-white mt-5 p-[16px] rounded-xl" onClick={startCapture}>Start Recording</button>
          </div>
        </div>
    
    </div>
  );
};

export default DropBar;
