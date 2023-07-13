import React,{useRef} from "react";
import emailjs from "@emailjs/browser";
function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7kt6jr', 'template_yocxutc', form.current, 'nnte3jPVBF3JLfn1O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={props.darkMode?"dark":""}>
      <div className="dark:bg-neutral-900">
    <div
      className="mx-5 sm:mx-14 md:mx-10 lg:mx-12 xl:mx-20 pb-5 text-slate-700 font-Poppins dark:text-gray-400"
      id="contact"
    >
      <h2 className="md:text-4xl text-2xl  pb-5 dark:text-gray-300" data-aos="fade-up" data-aos-offset="180" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
        Contact&nbsp;
        <i className="fa-regular fa-arrow-up-right-from-square fa-rotate-90 text-xl text-slate-400"></i>
      </h2>
      <div className="md:flex sm:px-5 border-b-2 pb-8">
        <div className="md:w-[50%] pb-5 md:pb-0">
          <h3 className="" data-aos="fade-up" data-aos-offset="150" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
            Do not hesitate to contact me through the form hrer or by direct
            email on <span className="underline">daviddeva37@gmail.com</span>
            &nbsp;regardless of the subject.
          </h3>
          <div className="pt-5 " data-aos="fade-up" data-aos-offset="130" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
            <a href="https://www.linkedin.com/in/devaraj-s" target="_blank">
              <span className="pr-8">
                <i className="fa-brands fa-linkedin text-4xl hover:scale-110 duration-500"></i>
              </span>
            </a>
            <a
              href="https://github.com/deva-rajS?tab=repositories"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-github text-4xl hover:scale-110 duration-500"></i>
              </span>
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="md:w-[50%] ">
          <fieldset className="grid pb-8">
            <label htmlFor="yourname" className="text-lg font-medium" data-aos="fade-up" data-aos-offset="150" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
              Your Name
            </label>
            <input
              type="text"
              id="yourname"
              name="user_name"
              className="outline-0 border-b-2 border-slate-600 dark:text-neutral-900" data-aos="fade-up" data-aos-offset="150" data-aos-duration="800" data-aos-delay="100" data-aos-once="true"
            />
            <label htmlFor="yourmail" className="pt-5 text-lg font-medium" data-aos="fade-up" data-aos-offset="130" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
              Your Mail
            </label>
            <input
              type="email"
              id="yourmail"
              name="user_email"
              className="outline-0 border-b-2 border-slate-600 dark:text-neutral-900" data-aos="fade-up" data-aos-offset="130" data-aos-duration="800" data-aos-delay="300" data-aos-once="true"
            />
            <label htmlFor="message" className="pt-5 text-lg font-medium" data-aos="fade-up" data-aos-offset="110" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="outline-0 border-b-2 border-slate-600 dark:text-neutral-900" data-aos="fade-up" data-aos-offset="100" data-aos-duration="800" data-aos-delay="300" data-aos-once="true"
            ></textarea>
          </fieldset>
          <div className="flex w-full justify-center" data-aos="fade-right" data-aos-offset="100" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
            <button
              type="submit"
              className="bg-slate-600 rounded-md text-white w-24 py-1 hover:scale-110 duration-700"
            >
              Send&nbsp;&nbsp;<i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <h2 className="pt-5 text-slate-500 dark:text-gray-300">&copy;&nbsp;Devaraj</h2>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
