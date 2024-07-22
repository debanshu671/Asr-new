import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import servisebg from "../assets/servise/serviseBg.png";
import eclips from "../assets/servise/Ellipse.png";
import web from "../assets/servise/web.png";
import app from "../assets/servise/app.png";
import ui from "../assets/servise/ui.png";
import card from "../assets/servise/card.png";
import Strategic from '../assets/servise/Strategic.png';
import schedule from '../assets/servise/schedule.png';

const Servise = () => {
  return (
    <>
      <Header />

      <div className="px-[10%] py-10">
        {/*-top section start----*/}
        <div className="flex justify-between">
          <div className="relative w-[460px]">
            <div className="">
              <img src={eclips} alt="" className="absolute w-[330px]" />
            </div>
            <h2 className="poppins font-bold text-7xl text-white absolute leading-tight w-full">
              Services
              <br /> We Provide
            </h2>
            <p className="poppins font-normal text-[18px] text-white pt-[230px] pb-10">
              We provide comprehensive web app development and design solutions
              tailored to your specific needs.
            </p>
            <span className="px-3 py-2 bg-white text-center mr-5 cursor-pointer">
              <FaArrowRight className="inline  text-black text-xl font-light" />
            </span>
            <Link className="inter text-[18px] text-white">Contact Us</Link>
          </div>
          <div>
            <img src={servisebg} alt="" />
          </div>
        </div>
        {/*-top section end----*/}

        {/*-dev section section start----*/}

        <div className="flex justify-between py-20">
          <div>
            <h2 className="poppins text-semibold text-white text-4xl pb-5">
              Top
              <br />
              Services
            </h2>
            <p className="poppins text-normal text-white text-[16px] pb-10 opacity-70">
              Top services you get from us
            </p>
          </div>
          <div className="w-[195px]">
            <img src={web} alt="" className="pb-2" />
            <h3 className="poppins text-semibold text-white text-xl pb-3">
              Web Development
            </h3>
            <p className="poppins text-normal text-white text-[16px] pb-10 opacity-70">
              We provide top-notch web development services to create dynamic
              and responsive websites tailored to your needs.
            </p>
          </div>
          <div className="w-[195px]">
            <img src={app} alt="" className="pb-2" />
            <h3 className="poppins text-semibold text-white text-xl pb-3">
              App Development
            </h3>
            <p className="poppins text-normal text-white text-[16px] pb-10 opacity-70">
              We provide top-notch app development services to create innovative
              and user-friendly mobile applications tailored to your needs.
            </p>
          </div>
          <div className="w-[195px]">
            <img src={ui} alt="" className="pb-2" />
            <h3 className="poppins text-semibold text-white text-xl pb-3">
              UI/UX design
            </h3>
            <p className="poppins text-normal text-white text-[16px] pb-10 opacity-70">
              We provide expert UI/UX design services to create intuitive and
              visually appealing user experiences.
            </p>
          </div>
        </div>
        {/*-dev section section start----*/}

        {/*---Handoff your work smarter now start--*/}
        <div className="flex justify-between">
          <div>
            <img src={card} alt="" />
          </div>
          <div className="w-[500px]">
            <h2 className="poppins font-semibold text-5xl text-white leading-tight pb-5">Handoff your work smarter now</h2>
            <p className="poppins font-normal text-[16px] text-white  pb-10">
              Handoff your work smarter with our expert web app development and
              design services. We create intuitive, visually appealing, and
              user-friendly solutions tailored to your needs.
            </p>
            <div className="flex gap-5 pb-10 pt-10">
            <div className="w-[88px] h-[50px] bg-white rounded-full flex items-center justify-center"><img src={Strategic} alt="" className="w-5 h-5" /></div>
              <div>
                <h3 className="poppins font-normal text-xl text-white  pb-3">Strategic</h3>
                <p className="poppins font-normal text-[16px] text-white  pb-3">
                  Work with us to develop strategic plans and achieve your goals
                  with precision and expertise.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center"><img src={schedule} alt="" /></div>
              <div>
                <h3 className="poppins font-normal text-xl text-white  pb-3">Work schedule</h3>
                <p className="poppins font-normal text-[16px] text-white  pb-3">
                  Deliver work timely with our efficient and reliable services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*---Handoff your work smarter now- end-*/}
      </div>
      <Footer />
    </>
  );
};

export default Servise;
