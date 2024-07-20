import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Home from "../pages/Home";
import Logo from '../assets/logo/logo.png';

const Header = () =>{
    return(
        <>
            <header className="flex justify-between px-10 py-6 md:border md:border-black md:border-b-2 items-center">
                <div className="w-[200px]"><img src={Logo} alt="" /></div>
                <nav className="md:block hidden">
                    <ul className="flex justify-between gap-10">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/servise'>Services</Link></li>
                        <li><Link to='/portfolios'>Portfolio</Link></li>
                        <li><Link to='/testimonial'>Testimonials</Link></li>
                        <li><Link to='/internship'>Internship</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="bg-[#F90629] md:px-10 px-5 md:py-3 py-2 rounded"><Link className="gap-2 flex items-center ">Let’s Talk <MdArrowOutward className="inline"/></Link></div>
            </header>
        </>
    );
}
export default Header;