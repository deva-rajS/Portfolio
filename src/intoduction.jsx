import React from "react";
import AOS from "aos";
AOS.init();
function Introduction(props) {
  return (
    <div className={props.darkMode?"dark":""}>
      <div className="dark:bg-neutral-900">
    <div
      className="mx-5 sm:mx-14 md:mx-10 lg:mx-12 xl:mx-20 pt-20 lg:pt-32 lg:pb-20 "
      id="introduction"
    >
      <div className="lg:flex">
        <div className="pt-7 lg:pt-16 md:pl-0  lg:w-[60%]">
          <div className="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
            <h2 className="font-Archivo text-5xl md:text-6xl text-slate-700 dark:text-white">
              I design and devlop applications
            </h2>
          </div>
          <h3 className="text-slate-700 font-Poppins pt-5 md:pt-10 dark:text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            I'm a full-time frontend developer with a passion for great design
            and user experiences.
          </h3>
        </div>
        <div className="relative lg:pt-0 z-0">
          <img src="./src/assets/techknown.png" alt="Tech Known" className="animate-fadeIn animate-delay-700 animate-duration-1000" />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Introduction;
