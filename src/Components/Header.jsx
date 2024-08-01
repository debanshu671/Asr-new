import React from "react";
import { NavLink,Link} from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Home from "../pages/Home";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between px-10 py-6 md:border md:border-black md:border-b-2 items-center">
        <div className="md:w-[200px] w-[150px]">
          <img src={Logo} alt="" />
        </div>
        <nav className="md:block hidden">
          <ul className="flex justify-between gap-10 inter font-regular text-[17px] leading-normal text-white">
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
        <div className="bg-[#F90629] md:px-10 px-5 md:py-3 py-2 rounded hover:translate-x-1 transition duration-500 hover:scale-125">
          <Link className="gap-2 flex items-center  text-xs md:text-xl">
            Let’s Talk <MdArrowOutward className="inline" />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
