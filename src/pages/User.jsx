import React from 'react'
import logo from "../assets/images/logo.png"
import searchBar from "../assets/images/searchtab.svg"
import videoframe from "../assets/images/videoframe.png"
import linkuser from "../assets/images/linkuser.svg"
import moveuser from "../assets/images/moveuser.svg"
import userprofile from "../assets/images/userprofile.svg"
const User = () => {
  return (
    <>
    <header className="my-10 md:px-[100px] px-6 py-2 flex justify-between items-center">
      <img
        src={logo}
        alt="logo"
        width={138}
        height={40}
        priority
        style={{ width: "auto", height: "auto" }}
      />
      <img
        src={userprofile}
        alt="logo"
        width={138}
        height={40}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </header>
    <main>
        <section className="md:px-[100px] px-6 flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div>
            <h1 className="font-bold text-[32px] font-sora leading-[40.32px]">
              Hello, User
            </h1>
            <p className="font-work_sans text-lg leading-[21.11px] font-normal">
              Here are your recorded videos
            </p>
          </div>
          <div className="sm:w-[400px] flex items-center gap-4 pr-10 pl-6 w-[90%] h-16 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black bg-neutral-2 mb-[43px]">
            <img
              src={searchBar}
              alt="logo"
              width={138}
              height={40}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <input
              type="text"
              placeholder="Search for a particular video"
              className="outline-none w-full placeholder:font-normal placeholder:text-sm placeholder:font-work_sans leading-[16.42px] bg-neutral-2 text-[#C3C3C3]"
            />
          </div>
        </section>
        <hr className="text-black border border-black border-opacity-[10%]" />
        <section className="md:pl-[100px] pr-14 md:mr-[100px] px-6 max-h-[70vh] md:overflow-y-scroll">
          <div className="mt-10">
            <p className="text-lg leading-[21.11px] font-work_sans font-medium text-Secondary opacity-[80%] mb-6">
              Recent files
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-[64px]">
              <div className="flex items-center flex-col px-4 pb-6 pt-4 border border-color-[#b6b3c6] rounded-2xl border-[60%]">
                <div className="w-full">
                  <img
                    src={videoframe}
                    alt="logo"
                    width={525}
                    height={208}
                  />
                </div>
                <div className="flex justify-between gap-4 items-start w-full mt-6">
                  <div>
                    <p className="font-medium text-xl font-work_sans leading-[23.46px] text-Secondary mb-2">
                      Video 1
                    </p>
                    <p className="font-work_sans leading-[18.77px] font-normal text-base text-[#B6B3C6]">
                      12:00 PM, 12th June 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={linkuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <img
                      src={moveuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col px-4 pb-6 pt-4 border border-color-[#b6b3c6] rounded-2xl border-[60%]">
                <div className="w-full">
                  <img
                    src={videoframe}
                    alt="logo"
                    width={525}
                    height={208}
                  />
                </div>
                <div className="flex justify-between gap-4 items-start w-full mt-6">
                  <div>
                    <p className="font-medium text-xl font-work_sans leading-[23.46px] text-Secondary mb-2">
                      Video 1
                    </p>
                    <p className="font-work_sans leading-[18.77px] font-normal text-base text-[#B6B3C6]">
                      12:00 PM, 12th June 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={linkuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <img
                      src={moveuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10">
            <p className="text-lg leading-[21.11px] font-work_sans font-medium text-Secondary opacity-[80%] mb-6">Files from last week</p>
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-[64px]">
              <div className="flex items-center flex-col px-4 pb-6 pt-4 border border-color-[#b6b3c6] rounded-2xl border-[60%]">
                <div className="w-full">
                  <img
                    src={videoframe}
                    alt="logo"
                    width={525}
                    height={208}
                  />
                </div>
                <div className="flex justify-between gap-4 items-start w-full mt-6">
                  <div>
                    <p className="font-medium text-xl font-work_sans leading-[23.46px] text-Secondary mb-2">
                      Video 1
                    </p>
                    <p className="font-work_sans leading-[18.77px] font-normal text-base text-[#B6B3C6]">
                      12:00 PM, 12th June 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={linkuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <img
                      src={moveuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col px-4 pb-6 pt-4 border border-color-[#b6b3c6] rounded-2xl border-[60%]">
                <div className="w-full">
                  <img
                    src={videoframe}
                    alt="logo"
                    width={525}
                    height={208}
                  />
                </div>
                <div className="flex justify-between gap-4 items-start w-full mt-6">
                  <div>
                    <p className="font-medium text-xl font-work_sans leading-[23.46px] text-Secondary mb-2">
                      Video 1
                    </p>
                    <p className="font-work_sans leading-[18.77px] font-normal text-base text-[#B6B3C6]">
                      12:00 PM, 12th June 2021
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={linkuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                    <img
                      src={moveuser}
                      alt="logo"
                      width={24}
                      height={24}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default User;
