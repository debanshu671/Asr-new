import React from 'react'
import Logo from '../assets/logo/logo.png';
import { Link } from "react-router-dom";
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

     <div className='px-[10%] py-10'>
     <footer >

        {/*------------------*/}
              <div className=' '>
              <div className="w-[200px] m-auto"><img src={Logo} alt="" />
                
                </div>
                <nav className="w-[800px] m-auto pt-10 ">
                    <ul className="flex justify-between gap-10 inter text-[#667085] font-normal text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/servise'>Services</Link></li>
                        <li><Link to='/portfolios'>Portfolio</Link></li>
                        <li><Link to='/testimonial'>Testimonials</Link></li>
                        <li><Link to='/internship'>Internship</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </nav>
              </div>

              {/*------------------*/}

              <div className='flex justify-between py-20'>

              <div className="w-[540px] flex justify-between items-center">
            <div className="flex items-center  bg-white rounded pl-4 ">
              
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[350px] h-[50px]  bg-transparent  border border-none text-[#667085] focus:outline-none"
              />
            </div>
            <div className='bg-[#FF002A] px-[45px] py-[13px] rounded inline-block'>
            <Link className='block'>Contact us</Link>
            
            
            </div>
          </div>
         

          <div className="flex justify-between pt-[50px] w-[245px] pr-12 text-[#98A2B3]">
            <FaFacebookF className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] "/>
            <FaTwitter className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] "/>
            <FaInstagram className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] "/>
            <FaLinkedinIn className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] "/>
            <FaYoutube className="transition-transform duration-200 hover:scale-150 hover:text-[#FF002A] "/>
          </div>


              </div>
                
            </footer>
        
        </div>  
        </div> 
    </>
  )
}

export default Footer