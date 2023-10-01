import React from "react";
import VideoHeader from "../components/VideoHeader";
import VideoFoot from "../components/VideoFoot";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const ScreenRecord = () => {
  return (
    <>
      <div className="app mt-11 mx-28 max-sm:mt-10 max-sm:mx-10">
        <NavBar />
        {/* <RecordBoard /> */}
        <VideoHeader />
        <VideoFoot />
      </div>
      <Footer />
    </>
  );
};

export default ScreenRecord;
