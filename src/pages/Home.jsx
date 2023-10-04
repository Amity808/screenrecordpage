import React from 'react'
import styles from "./style"

import record from "../assets/images/record.png";
import share from "../assets/images/share.png";
import heroimg from "../assets/images/heroimg.png";
import visit from "../assets/images/visit.png";
import videorepo from "../assets/images/videorpo.png";
import boardvideo from "../assets/images/boardvideo.png";
import recordbar from "../assets/images/recordbar.png";
import arrowright from "../assets/images/arrowright.svg";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
       <NavBar />
      <section>
        <section className="bg-white md:pr-[51.5px] md:pl-[100px] px-5 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[14px] pt-[107px] pb-[75.92px]">
      <div className="flex flex-col gap-12 items-start max-w-[548px]">
        <div>
          <h1 className="font-sora text-5xl sm:text-[64px] leading-[64px] text-Secondary font-bold">
            Show Them Don’t Just Tell
          </h1>
          <p className="pt-5 font-sans text-xl font-normal text-black text-opacity-75">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <button className="px-6 py-[22px] bg-[#120B48] rounded-lg outline-0 text-white font-work_sans font-medium text-lg leading-[21.11px] flex gap-3 items-center justify-center">
          Install HelpMeOut
          <img
            src={arrowright}
            alt="Arrow"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>
      <img src={heroimg} alt="Hero" width={727} height={594.08} />
    </section>
      </section>
      <section className="bg-white flex flex-col justify-center items-center gap-[64px] py-20 px-5 md:px-[100px] mt-14 mb-[70px]" id="features">
        <div className="text-center">
            <h2 className={`${styles.heading}`}>Features</h2>
            <p className={`${styles.paragraph}`}>Key Highlights of Our Extension</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[56px]">
           <div className="flex flex-col items-center gap-12">
                <div className="flex items-start gap-4">
                    <img src={record} alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Simple Screen Recording</p>
                        <p className={`${styles.paragraph} pt-2`}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <img src={share} alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Easy-to-Share URL</p>
                        <p className={`${styles.paragraph} pt-2`}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <img src={visit} alt="Feature 1" width={48} height={48} style={{width: "auto", height: "auto"}}/>
                    <div>
                        <p className={`${styles.subHeading}`}>Revisit Recordings</p>
                        <p className={`${styles.paragraph} pt-2`}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                    </div>
                </div>

            </div>
            <img src={videorepo} alt="Features" width={636} height={454} style={{width: "auto", height: "auto"}}/>
        </div>
    </section>
    <section className="bg-white flex flex-col justify-center items-center gap-[59px] px-5 md:px-[100px] pt-[103px] pb-[118px]" id="works">
      <h2 className={`${styles.heading}`}>How it works</h2>
      <div className="flex flex-col md:flex-row gap-[83px]">
        <div className="max-w-[358px] flex flex-col items-center gap-7">
        <div className="flex flex-col justify-center items-center text-center">
            <p className="font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-Primary px-[23px] py-[14px] border rounded-[60px]">
              1
            </p>
            <p className={`${styles.subHeading} mt-8`}>Record Screen</p>
            <p className={`${styles.paragraph} mt-4`}>
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <img
            src={recordbar}
            alt="How It Works"
            width={357}
            height={268}
            className={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="max-w-[358px] flex flex-col items-center gap-7">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-Primary px-[23px] py-[14px] border rounded-[60px]">
              2
            </p>
            <p className={`${styles.subHeading} mt-8`}>Share Your Recording</p>
            <p className={`${styles.paragraph} mt-4`}>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <img
            src={recordbar}
            alt="How It Works"
            width={357}
            height={268}
            className={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="max-w-[358px] flex flex-col items-center gap-7">
        <div className="flex flex-col justify-center items-center text-center">
            <p className="font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-Primary px-[23px] py-[14px] border rounded-[60px]">
              3
            </p>
            <p className={`${styles.subHeading} mt-8`}>Learn Effortlessly</p>
            <p className={`${styles.paragraph} mt-4`}>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
          <img
            src={recordbar}
            alt="How It Works"
            width={357}
            height={268}
            className={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>

      <Footer />
       
    </div>
  )
}

export default Home
