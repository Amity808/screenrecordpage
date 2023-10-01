import React from 'react'
import learning from "../assets/images/learning.png";
import pressing from "../assets/images/pressing.png";
import dotdot from "../assets/images/dotdot.png";
import dotdot2 from "../assets/images/dotdot2.png";
import teaching from "../assets/images/teaching.png";
import recordbar from "../assets/images/recordbar.png";
import boardvideo from "../assets/images/boardvideo.png";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
       <NavBar />
      <section className="h-screen w-full">
        <div className="relative w-full mt-5 flex gap-x-[1.25rem] pr-5">
          <div className=" w-full ml-[6.25rem] flex flex-col mt-[9.9rem] gap-y-[3rem]">
            <div className=" font-sora font-[700] text-[4rem] leading-[4rem]">
              <h1>Show Them</h1>
              <h1>Don't Just Tell</h1>
            </div>

            <p className=" font-inte font-[400] text-[1.25rem] opacity-[75%] leading-[1.75rem]">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website
            </p>
            <div>
              <button className="flex items-center space-x-3 bg-[#120B48] text-white rounded-[0.5rem] px-[1.375rem] py-[1.5rem] font-workSans font-[500] text-[1.125rem]">
                <span>Install HelpMeOut</span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91699 10.5H16.942"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full flex mt-[6.5rem] gap-x-4 mr-10">
            <div className="relative flex flex-col gap-y-5">
              <img
                src={learning}
                alt="woman on laptop"
                className="rounded-[0.5rem]"
              />
              <img
                src={teaching}
                alt="father and kid on pc"
                className="rounded-[0.5rem]"
              />
              <img
                src={dotdot}
                alt="grid dots"
                className="absolute -bottom-[3rem] right-6 opacity-[30%] -z-10"
              />
            </div>
            <div className="flex flex-col">
              <img
                src={dotdot2}
                alt="grid dots"
                className="absolute top-[2.9rem] right-6 opacity-[70%] -z-10"
              />
              <img
                src={pressing}
                alt="lady with mobile phone "
                className="rounded-[0.5rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#404040] bg-opacity-[10%] h-12"></div>
      <section className="w-full flex flex-col items-center py-10 ">
        <div className=" flex flex-col items-center gap-[0.5rem] mt-10">
          <h2 className="font-sora font-[700] text-[2.5rem] leading-[3.15rem] text-[#141414]">
            Features
          </h2>
          <p className=" font-workSans font-[400] text-[#616163] text-[1.25rem] leading-[1.891rem]">
            Key Highlights of Our Extension
          </p>
        </div>
        <div className="flex flex-row items-center my-[4rem] px-[5rem] gap-x-[3.5rem]">
          <div className="flex flex-col gap-y-[3rem]">
            <div className="flex gap-x-[1rem]">
              <div className="w-[3rem] h-[3rem] bg-[#413C6D] rounded-[1.875rem] p-[0.5rem]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9603 2.66675C8.60029 2.66675 2.62695 8.64008 2.62695 16.0001C2.62695 23.3601 8.60029 29.3334 15.9603 29.3334C23.3203 29.3334 29.2936 23.3601 29.2936 16.0001C29.2936 8.64008 23.3336 2.66675 15.9603 2.66675ZM16.0003 21.6401C12.8803 21.6401 10.3603 19.1201 10.3603 16.0001C10.3603 12.8801 12.8803 10.3601 16.0003 10.3601C19.1203 10.3601 21.6403 12.8801 21.6403 16.0001C21.6403 19.1201 19.1203 21.6401 16.0003 21.6401Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-y-[0.5rem]">
                <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118rem] text-[#1B233D]">
                  Simple Screen Recording
                </h3>
                <p className=" font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="flex gap-x-[1rem]">
              <div className="w-[3rem] h-[3rem] bg-[#413C6D] rounded-[1.875rem] p-[0.5rem]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5202 3.94672L9.48016 7.94672C1.38682 10.6534 1.38682 15.0667 9.48016 17.7601L13.0535 18.9467L14.2402 22.5201C16.9335 30.6134 21.3602 30.6134 24.0535 22.5201L28.0668 10.4934C29.8535 5.09339 26.9202 2.14672 21.5202 3.94672ZM21.9468 11.1201L16.8802 16.2134C16.6802 16.4134 16.4268 16.5067 16.1735 16.5067C15.9202 16.5067 15.6668 16.4134 15.4668 16.2134C15.0802 15.8267 15.0802 15.1867 15.4668 14.8001L20.5335 9.70672C20.9202 9.32006 21.5602 9.32006 21.9468 9.70672C22.3335 10.0934 22.3335 10.7334 21.9468 11.1201Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-y-[0.5rem]">
                <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118rem] text-[#1B233D]">
                  Easy-to-Share URL
                </h3>
                <p className=" font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="flex gap-x-[1rem]">
              <div className="w-[3rem] h-[3rem] bg-[#413C6D] rounded-[1.875rem] p-[0.5rem]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.587 2.66675H10.4137C5.56033 2.66675 2.66699 5.56008 2.66699 10.4134V21.5734C2.66699 26.4401 5.56033 29.3334 10.4137 29.3334H21.5737C26.427 29.3334 29.3203 26.4401 29.3203 21.5867V10.4134C29.3337 5.56008 26.4403 2.66675 21.587 2.66675ZM7.00033 15.8534C7.04033 13.5067 7.97366 11.2934 9.62699 9.64008C11.3337 7.93341 13.6003 7.00008 16.0003 7.00008C18.4003 7.00008 20.667 7.93341 22.3603 9.64008C22.4003 9.68008 22.4403 9.73341 22.4803 9.78675V8.64008C22.4803 8.09341 22.9337 7.64008 23.4803 7.64008C24.027 7.64008 24.4803 8.09341 24.4803 8.64008V12.1734C24.4803 12.7201 24.027 13.1734 23.4803 13.1734H19.947C19.4003 13.1734 18.947 12.7201 18.947 12.1734C18.947 11.6267 19.4003 11.1734 19.947 11.1734H21.0537C21.0137 11.1334 20.987 11.0934 20.947 11.0534C19.627 9.73341 17.867 9.00008 16.0003 9.00008C14.1337 9.00008 12.3737 9.73341 11.0537 11.0534C9.76033 12.3467 9.04033 14.0667 9.01366 15.8934C9.00033 16.4267 8.54699 16.8667 8.00033 16.8667H7.98699C7.44033 16.8667 7.00033 16.4001 7.00033 15.8534ZM22.3603 22.3601C20.667 24.0534 18.4003 25.0001 16.0003 25.0001C13.6003 25.0001 11.3337 24.0667 9.64033 22.3601C9.60033 22.3201 9.56033 22.2667 9.52033 22.2134V23.3467C9.52033 23.8934 9.06699 24.3467 8.52033 24.3467C7.97366 24.3467 7.52033 23.8934 7.52033 23.3467V19.8134C7.52033 19.2667 7.97366 18.8134 8.52033 18.8134H12.0537C12.6003 18.8134 13.0537 19.2667 13.0537 19.8134C13.0537 20.3601 12.6003 20.8134 12.0537 20.8134H10.947C10.987 20.8534 11.0137 20.8934 11.0537 20.9334C12.3737 22.2534 14.1337 22.9867 16.0003 22.9867C17.867 22.9867 19.627 22.2534 20.947 20.9334C22.2537 19.6267 22.987 17.8801 22.987 16.0134C22.987 15.4667 23.4403 15.0134 23.987 15.0134C24.5337 15.0134 24.987 15.4667 24.987 16.0134C24.987 18.4267 24.0537 20.6801 22.3603 22.3601Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-y-[0.5rem]">
                <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118rem] text-[#1B233D]">
                  Revisit Recordings
                </h3>
                <p className=" font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          
          <img src={boardvideo} alt="videoRepository image" className="" />
        </div>
      </section>
      <div className="bg-[#404040] bg-opacity-[10%] h-12"></div>
      <section className="w-full flex flex-col items-center py-[6.4rem]">
        <h2 className="font-sora font-[700] text-[2.5rem] leading-[3.15rem] text-[#141414]">
          How it works
        </h2>
        <div className="mt-[6rem] flex gap-x-[5.88rem] px-[6.25rem]">
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                1
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
                Record Screen
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={recordbar} alt="record image" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                1
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
                Record Screen
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={recordbar} alt="record image" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[2rem] items-center">
            <div className="w-[3.625rem] h-[3.563rem] rounded-[3.75rem] bg-[#120B48] flex items-center justify-center">
              <p className=" font-inte font-[700] text-[2rem] leading-[2.421rem] text-white">
                1
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-inter font-[600] text-[1.75rem] leading-[2.118] text-[#1B233D]">
                Record Screen
              </h3>
              <p className="text-center font-workSans font-[400] text-[1.25rem] leading-[1.891rem] text-[#616163]">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={recordbar} alt="record image" className="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
       
    </div>
  )
}

export default Home
