import React from "react";
import story1 from "../assets/home/story-1.png";
import story2 from "../assets/home/story-2.png";
import story3 from "../assets/home/story-3.png";
import story4 from "../assets/home/story-4.png";
import star from "../assets/home/star-hero-sec.png";

const Ourstory = () => {
  return (
    <>
      <div className="px-[10%] md:py-20 py-10">
        <div>
          <div className="w-[480px]">
            <h3 className="inline-block poppins text-xl tracking-widest text-[#F90629] uppercase pr-2">
              Our Story
            </h3>
            <span className="inline-block w-5 mt-5">
              <img src={star} alt="" />
            </span>

            <p className="poppins text-white font-normal text-xl pt-5 pb-12">
              Creating innovative web and app solutions with cutting-edge design
              and seamless functionality for your business.
            </p>
          </div>

          <div className="flex justify-between gap-10">
            <div className="w-[30%]">
              <img src={story1} alt="" className="w-full pt-14" />
            </div>
            <div className="w-[60%] relative">
              <div className="">
                <img src={story2} alt="" className="pl-10" />
                <img
                  src={story3}
                  alt=""
                  className="absolute top-[-7%] right-[50%]"
                />
                <img
                  src={story4}
                  alt=""
                  className="absolute top-[20%] right-0"
                />
              </div>
              <p className="poppins text-white opacity-[70%] font-normal text-xl pr-5 pt-10">
                Our experience with this service has been exceptional. The team
                is professional, attentive, and consistently delivers
                high-quality work. We highly recommend them for anyone seeking
                reliable and efficient solutions. They've exceeded our
                expectations every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
