import React, { useEffect, useRef, useState } from "react";

function SideMenu(props){
    let menuRef=useRef();
    
    useEffect(()=>{
        let handler=(e)=>{
           if (!menuRef.current.contains(e.target)){
            props.setSlide(false);
           }
        }
        document.addEventListener("mousedown",handler);

        return()=>{
            document.removeEventListener("mousedown",handler);
        }
    })

    return(
      <div className={props.darkMode?"dark":""}>
        <div className={props.hide?"hidden":props.slide?"w-[70%]  h-screen bg-slate-200 fixed right-0 top-0 animate-slideInRight animate-duration-1000 z-10 dark:bg-neutral-500":"w-[70%]  h-screen bg-slate-200 fixed right-0 top-0 animate-slideOutRight animate-duration-1000 z-10 dark:bg-neutral-500"} ref={menuRef} >
            <div className={props.slide?"font-semibold text-xl text-slate-700 absolute right-10 pt-8 animate-fadeIn animate-duration-1000 dark:text-gray-300":"font-semibold text-xl text-slate-700 absolute right-10 pt-8 animate-fadeOut animate-duration-100 dark:text-gray-300"} onClick={()=>props.setSlide(false)}><i className="fa-solid fa-x"></i></div>
            <div className={props.slide?"absolute left-10 pt-28 animate-fadeIn animate-duration-1000 animate-delay-700 ":"absolute left-10 pt-28 animate-fadeOut animate-duration-700"}>
             
          <ul className="font-Poppins text-slate-700 dark:text-gray-300 z-1 cursor-pointer">
            <li onClick={()=>props.setHide(true)} className="">
              <a href="#introduction">Introduction</a>
            </li>
            <li onClick={()=>props.setHide(true)} className="py-14">
              <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>props.setHide(true)} className="">
              <a href="#about">About</a>
            </li>
            <li onClick={()=>props.setHide(true)} className="py-14">
              <a href="#contact">Contact</a>
            </li>
            <li className="">
            <i onClick={(()=>props.setDarkMode(!props.darkMode))} className={props.darkMode?"fa-light fa-sun fa-lg animate-duration-1000 animate-rotateIn":"fa-light fa-moon fa-lg animate-rollIn animate-duration-1000"}></i>
            </li>
          </ul>
        </div>
        </div>
        </div>
    )
}

export default SideMenu;