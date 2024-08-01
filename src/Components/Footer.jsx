import React from "react";
import Logo from "../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className="  md:border md:border-black md:border-t-2 ">
        <div className="px-[10%] py-10">
          <footer>
            {/*------------------*/}
            <div className=" ">
              <div className="w-[200px] m-auto">
                <img src={Logo} alt="" />
              </div>
              <nav className="md:w-[800px] m-auto pt-10 ">
                <ul className="flex justify-between md:gap-10 gap-3 inter md:text-[#667085] text-white font-normal md:text-xl text-[9px]">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/servise">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolios">Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial">Testimonials</NavLink>
                  </li>
                  <li>
                    <NavLink to="/internship">Internship</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/*------------------*/}

            <div className="md:flex md:justify-between md:py-20 py-10">
              <div className="md:w-[540px] w-full flex md:justify-between md:items-center gap-2">
                <div className="flex items-center  bg-white rounded pl-4 ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="md:w-[350px] w-full md:h-[50px] h-[40px]  border border-none text-[#667085] focus:outline-none"
                  />
                </div>
                <div className="bg-[#FF002A] md:px-[45px] md:py-[13px] rounded inline-block px-5 py-3 duration-500 hover:scale-110">
                  <Link className="block">Contact us</Link>
                </div>
              </div>

              <div className="flex justify-between pt-[50px] w-[245px] pr-12 text-[#98A2B3] m-auto md:m-0">
                <FaFacebookF className="transition-transform duration-200  hover:scale-150 hover:text-[#FF002A] " />
                <FaTwitter className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] " />
                <FaInstagram className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] " />
                <FaLinkedinIn className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] " />
                <FaYoutube className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] " />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
