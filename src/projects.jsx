import React from "react";
import projectsData from "./assets/data"
import Cards from "./cards"
import { nanoid } from "nanoid";
function Projects(props) {
  
    const cardsElelment = projectsData.map((data,i)=>{
      return(
        <Cards img={data.img} name={data.name} liveLink={data.liveLink} codeLink={data.codeLink} id={data.id} key={nanoid()} delay={data.delay} tabdelay={data.tabdelay} />
      ) 
    })
  return (
    <div className={props.darkMode?"dark":""}>
      <div className="dark:bg-neutral-900">
    <div
      className="mx-5 sm:mx-14 md:mx-10 lg:mx-12 xl:mx-20 lg:pt-10 "
      id="projects"
    >
      <h2 className="text-slate-700 md:text-4xl text-2xl font-Poppins pb-5 dark:text-gray-300" data-aos="fade-up" data-aos-offset="180" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
        Projects&nbsp;
        <i className="fa-regular fa-arrow-up-right-from-square fa-rotate-90 text-xl text-slate-400"></i>
      </h2>
      <div className="sm:px-5" data-aos="fade-up" data-aos-offset="180" data-aos-duration="1100" data-aos-delay="300" data-aos-once="true">
        <h3 className="text-slate-700 font-Poppins dark:text-gray-400">
          Check out a few of the main projects have worked on.
        </h3>
      </div>
      <div className="w-full  grid gap-8 xl:grid-cols-3 md:grid-cols-2 place-items-center pt-10">
        {cardsElelment}
      </div>
    </div>
    </div>
    </div>

  );
}
export default Projects;
