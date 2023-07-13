import React from "react";
function Cards(props){

    function delay(){
        if (window.innerWidth<768){
            return "300"
        }
        if(window.innerWidth>767&&window.innerWidth<1280){
            return props.tabdelay
        }
        if(window.innerWidth>1279){
            return props.delay
        }
    }
    function offset(){
        if (window.innerWidth<768){
            return "50"
        }
        if(window.innerWidth>767&&window.innerWidth<1280){
            return "200"
        }
        if(window.innerWidth>1279){
            return "200"
        }
    }
    return(
        <div className={props.darkMode?"dark":""}>
        <div className="group bg-slate-200 dark:bg-slate-300 w-[300px] h-[360px] rounded-lg relative grid justify-center z-0" data-aos="fade-right" data-aos-offset={offset()} data-aos-duration="1000" data-aos-delay={delay()} data-aos-once="true" key={props.id}>
        <img
          src={props.img}
          alt="img"
          className="w-[270px] h-[300px]"
        />
        <div className="flex w-full justify-center  absolute bottom-0 py-5  transition-all transform translate-y-0  group-hover:-translate-y-6 group-hover:ease-in-out duration-700">
          <h3 className="cardname text-slate-700 md:text-3xl text-2xl font-semibold">{props.name}
          </h3>
        </div>
        <div className="flex font-semibold justify-between h-[25px] mx-10 transition-all transform translate-y-7  group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:ease-in-out duration-1000"><a href={props.liveLink} target="_blank" className="bg-slate-200   rounded-md  px-3 text-slate-700 ">Live</a><a href={props.codeLink} target="_blank" className="bg-slate-200  rounded-md  px-2 text-slate-700 ">Code</a></div>
      </div>
      </div>
    )
}
export default Cards;