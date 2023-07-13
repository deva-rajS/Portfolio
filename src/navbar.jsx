import React from "react";
import { useState } from "react";
function Navbar(props) {
      
  return (
    <div className={props.darkMode?"dark":""}>
    <div className=" w-[100%] fixed top-0 left-0  z-10 bg-transparent dark:bg-neutral-900">
      <div className="flex  justify-between relative mx-5 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-20">
        <div className="w-full flex relative py-10 md:animate-fadeIn md:animate-duration-1000 md:animate-delay-700 dark:text-white">
          <svg
            width="25"
            height="25"
            viewBox="0 0 339 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              className="dark:fill-gray-400"
              d="M0 235V287H175.2C226.933 287 267.067 274.867 295.6 250.6C324.133 226.333 338.4 190.733 338.4 143.8C338.4 96.8666 324.133 61.2666 295.6 37C267.067 12.7333 226.933 0.599976 175.2 0.599976L47.2 0.999971H0V52H66V52.6H170.8C204.4 52.6 229.867 59.9333 247.2 74.6C264.533 89 273.2 112.067 273.2 143.8C273.2 175.267 264.533 198.333 247.2 213C229.867 227.667 204.4 235 170.8 235L66 235L64 235L0 235Z"
              fill="#334155"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 334 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              className="dark:fill-white"
              d="M0 13.4334V0H239.6C269.2 0 292.133 7.46667 308.4 22.4C324.933 37.3333 333.2 60 333.2 90.4C333.2 116.267 327.2 136.533 315.2 151.2C303.2 165.867 286.133 175.067 264 178.8L330 286H257.2L196 180.8H67V128.407L232 128.8C243.733 128.8 252.667 125.867 258.8 120C265.2 114.133 268.4 104.267 268.4 90.4C268.4 76.2667 265.2 66.4 258.8 60.8C252.667 54.9333 243.733 52 232 52H67H64H41.2716C37.0401 42.8559 29.8279 33.9431 20.3427 26.238C14.2109 21.257 7.31784 16.9338 0 13.4334Z"
              fill="#334155"
            />
          </svg>
        </div>
        <div className="hidden md:block absolute right-0 py-10 animate-fadeIn animate-duration-1000 animate-delay-700">
          <ul className="flex font-Poppins text-slate-700 dark:text-gray-400 z-1 cursor-pointer">
            <li className="">
              <a href="#introduction">Introduction</a>
            </li>
            <li className="px-16">
              <a href="#projects">Projects</a>
            </li>
            <li className="">
              <a href="#about">About</a>
            </li>
            <li className="px-14">
              <a href="#contact">Contact</a>
            </li>
            <li className="">
              <i onClick={(()=>props.setDarkMode(!props.darkMode))} className={props.darkMode?"fa-light fa-sun fa-lg animate-duration-1000 animate-rotateIn":"fa-light fa-moon fa-lg animate-rollIn animate-duration-1000"}></i>
            </li>
          </ul>
        </div>
        <div onClick={()=>(props.setSlide(!props.slide)) (props.setHide(!props.hide))} className="absolute right-0 md:hidden py-10">
          <i className="fa-regular fa-bars-sort fa-flip-horizontal fa-xl text-slate-700 dark:text-white"></i>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Navbar;
