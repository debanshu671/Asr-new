import React from "react";
import Herobg from "../assets/home/hero-sec-bg.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Herostar from "../assets/home/star-hero-sec.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor:"yellow"
      }}
      className="py-20 w-full "
    >
      <div className="px-[10%] m-auto">
        <div className="md:w-[800px] relative">
          <img
            src={Herostar}
            alt=""
            className="absolute md:top-[35px] top-[15px] right-0 md:w-12 w-7"
          />
          <h1 className="inter font-semibold md:text-7xl md:leading-normal leading-normal text-4xl  text-white  md:pb-12 pb-10">
            We develop & Design
            <span className="inter font-semibold md:text-7xl text-4xl bg-gradient-to-r from-[#FF9FAD] to-[#F90629] text-transparent bg-clip-text">
              {" "}
              amazing
            </span>{" "}
            websites
            <br />
            for your business<span className="text-[#F90629] pl-1">.</span>
          </h1>
          <p className="poppins md:text-[18px] leading-normal text-xs text-white font-normal">
            We are a team of passionate developers and designers who excel in
            building beautiful products. Utilizing the latest technologies and
            frameworks, we transform ideas into reality with innovation and
            creativity. Our commitment to excellence ensures every product we
            create stands out, offering stunning design and seamless
            functionality. We love what we do, and it shows in every project we
            undertake.
          </p>
        </div>

        <div className="flex items-center md:mt-10 mt-5 pb-20 ">
          <Link className="border border-[#F90629] md:px-8 md:py-3 px-5 py-1 rounded mr-1 hover:translate-y-2 transition">
            View work
            <MdArrowOutward className="inline pl-2 text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
