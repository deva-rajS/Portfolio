import React from "react";
function ExProjects(props) {
  return (
    <div className={props.darkMode?"dark":""}>
      <div className="dark:bg-neutral-900">
    <div className="mx-5 sm:mx-14 md:mx-10 lg:mx-12 xl:mx-20 ">
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
        <h2 className="text-slate-700 md:text-4xl text-2xl font-Poppins dark:text-gray-300" >
          Explore All Projects&nbsp;
          <i className="fa-regular fa-arrow-up-right-from-square fa-rotate-90 text-xl text-slate-500"></i>
        </h2>
      </div>
      <div className="sm:px-5 pt-5 sm:pt-8" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        <h3 className="text-slate-700 font-Poppins dark:text-gray-400">
          Click me a icon of the projects.
        </h3>
      </div>
      <div className="relative">
        <div className="relative" data-aos="zoom-in" data-aos-offset={window.innerWidth<768?"":window.innerWidth>767&&window.innerWidth<1280?"350":window.innerWidth>1279?"400":""} data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
          <img
            src="./src/assets/pro-bg.svg"
            alt="img"
            className="relative -z-10"
          />
          <a href="https://deva-rajS.github.io/Ecommerce-site/" target="_blank" className="w-full">
            <img
              src="./src/assets/ecom.svg"
              alt="ecom"
              className="absolute w-[12%] lg:w-[13%] left-[43.5%] top-[17%]  animate-twBounce animate-infinite animate-slow hover:animate-paused"
            />
          </a>
          <a href="https://deva-rajS.github.io/noteapp/" target="_blank" className="w-full">
            <img
              src="./src/assets/notes.svg"
              alt="ecom"
              className="absolute w-[11%] right-[27%] top-[34%]  animate-twBounce animate-infinite animate-slow hover:animate-paused"
            />
          </a>
          <a href="https://deva-rajS.github.io/calculator/" target="_blank" className="w-full">
            <img
              src="./src/assets/calculator.svg"
              alt="ecom"
              className="absolute w-[11%] left-[27%] top-[34%]  animate-twBounce animate-infinite animate-slow hover:animate-paused"
            />
          </a>
          <a href="https://deva-rajS.github.io/Hidester/" target="_blank" className="w-full">
            <img
              src="./src/assets/vpn.svg"
              alt="ecom"
              className="absolute w-[11%] left-[32.5%] top-[62%]  animate-twBounce animate-infinite animate-slow hover:animate-paused"
            />
          </a>
          <a href="https://deva-rajS.github.io/mediwave/" target="_blank" className="w-full">
            <img
              src="./src/assets/ux.svg"
              alt="ecom"
              className="absolute w-[9.5%] right-[32.5%] top-[64%]  animate-twBounce animate-infinite animate-slow hover:animate-paused"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default ExProjects;
