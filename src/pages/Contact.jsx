import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="px-[10%] py-10">
        <div className="flex justify-between pb-20">
          <div className="w-[770px]">
            <h3 className="poppins text-[#F90629] text-[16px] font-normal leading-normal tracking-wider pb-5 inline-block">
              Get Started
            </h3>
            <h2 className="poppins text-white md:text-6xl text-3xl font-bold md:leading-normal leading-tight pb-5">
              Get in touch with us. We're here to assist you.
            </h2>
          </div>
          <div className="pt-10">
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center mb-4 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center mb-4 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center mb-4 cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div>
          <form>
            <div className="flex  gap-20 ">
              <div>
                <div className="pb-10">
                  <label
                    className="block text-white text-[16px] inter font-normal mb-2"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[512px] h-[48px] rounded-md pl-2 text-[#667085] text-[16px] inter font-normal "
                  />
                </div>

                <div className="pb-10">
                  <label className="block text-white text-[16px] inter font-normal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone no"
                    className="w-[512px] h-[48px] rounded-md pl-2 text-[#667085] text-[16px] inter font-normal "
                  />
                </div>

                <div className="pb-10">
                  <label className="block text-white text-[16px] inter font-normal mb-2">
                    Write Your Message Here
                  </label>
                  <textarea
                    type="text"
                    placeholder="your message"
                    className="w-[512px] h-[200px]  rounded-md pl-2 pt-2 text-[#667085] text-[16px] inter font-normal "
                  />
                </div>

                <button className="px-10 py-5 bg-[#F90629] rounded-2xl inter font-normal text-xl text-white">
                  Leave us a Message <FaArrowRight className="inline" />
                </button>
              </div>

              <div lassName="pb-10">
                <label className="block text-white text-[16px] inter font-normal mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  placeholder="Your mail"
                  className="w-[512px] h-[48px] rounded-md pl-2 text-[#667085] text-[16px] inter font-normal "
                />
              </div>
            </div>
          </form>
        </div>

        {/*-contact info section start---*/}
        <div
          className="flex justify-between pt-20
 items-center"
        >
          <div>
            <h3 className="inter font-normal text-xl text-white pb-5">
              Contact Info
            </h3>
            <h2 className="inter font-normal text-6xl text-white leading-tight pb-5">
              We are always
              <br /> happy to assist you
            </h2>
          </div>
          <div className="w-[300px]">
            <h3 className="inter font-normal text-xl text-white pb-1">
              Email Address
            </h3>
            <hr className="w-6 pb-5" />
            <span className="inter font-normal text-[16px] text-white pb-5 inline-block">
              help@info.com
            </span>
            <p>
              Assistance hours: <br />
              Monday - Friday <br />6 am to 8 pm EST
            </p>
          </div>
          <div className="w-[300px]">
            <h3 className="inter font-normal text-xl text-white pb-1">
              Number
            </h3>
            <hr className="w-6 pb-5" />
            <span className="inter font-normal text-[16px] text-white pb-5 inline-block">
              <Link to="+919836365640">+91 9836365640</Link>
            </span>
            <p>
              Assistance hours: <br />
              Monday - Friday
              <br /> 6 am to 8 pm EST
            </p>
          </div>
        </div>

        {/*-contact info section end---*/}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
