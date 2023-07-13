import React from "react";
function AboutMe(props) {
  return (
    <div className={props.darkMode?"dark":""}>
      <div className="dark:bg-neutral-900">
    <div
      className="mx-5 sm:mx-14 md:mx-10 lg:mx-12 xl:mx-20 pt-16 pb-12"
      id="about"
    >
      <h2 className="text-slate-700 md:text-4xl text-2xl font-Poppins pb-5 dark:text-gray-300" data-aos="fade-up" data-aos-offset="180" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
        About Me&nbsp;
        <i className="fa-regular fa-arrow-up-right-from-square fa-rotate-90 text-xl text-slate-400"></i>
      </h2>
      <div className="sm:px-5 ">
        <h3 className="text-slate-700 font-Poppins sm:pt-5 dark:text-gray-400" data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Hi there! I'm Devaraj, a passionate front-end web developer with a
          love for creating beautiful and functional websites. I thrive on
          turning ideas into reality and enjoy the process of bringing designs
          to life through code.
        </h3>
        <h3 className="text-slate-700 font-Poppins pt-5 dark:text-gray-400" data-aos="fade-up" data-aos-offset="130" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
          With 6 months of exprerience in the field, I have developed a strong
          skill set in front-end development, including HTML, CSS, and
          JavaScript. I am constantly honing my skills and staying up to date
          with the latest web technologies and best practices to ensure that I
          can deliver the best possible solutions to my clients.
        </h3>
      </div>
    </div>
    </div>
    </div>
  );
}
export default AboutMe;
