import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import interimg from '../assets/internship/interBg.png';
import { Link } from "react-router-dom";
import compimg from '../assets/internship/getfrom.png';
import one from '../assets/internship/one.png'
import two from '../assets/internship/two.png'
import three from '../assets/internship/three.png'

const Internship = () => {
  return (
    <div>
      <Header />

      {/* top section start-*/}
<div className="px-[10%]">
      <div className="md:py-20 py-10">
      <div className="md:flex md:gap-24 md:justify-center block">
        <div className="md:w-45% pb-10">
<img src={interimg} alt="" />
        </div>

        <div className="md:w-[45%]">
          <span className="inter text-[#F90629] text-[16px] font-normal pb-5 inline-block">ASR Tech Soution</span>
          <h2 className="inter text-white md:text-6xl text-3xl font-bold md:leading-normal leading-tight pb-5">Paid  Internship <br/>Offer for everyone!</h2>
          <p className="poppins text-white md:text-[16px] text-xs font-normal leading-normal pb-10">Learning is the compass guiding us towards a brighter tomorrow. Embrace curiosity as your ally, for knowledge is the cornerstone of progress. Seek wisdom in the smallest of lessons, for therein lies the seed of transformation. Let each day be a canvas, painted with the colors of discovery. In the journey of learning, the path to a better tomorrow unfolds, shaped by the insights gained today.</p>

          <div className="w-[545px] flex justify-between gap-5 items-center">
            <div className="flex items-center  bg-white rounded pl-5 ">
              
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[350px] h-[47px]  bg-transparent  border border-none text-[#667085]"
              />
            </div>
            <div className='bg-[#FF002A] px-[40px] py-3 rounded '>
            <Link className=''>Contact us</Link>
            
            
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* top section end-*/}


      {/*-----------What perks you Get from Us?-*/}


<div className="md:py-20 py-10 text-center">
<div className="md:w-[800px] m-auto">
  <h2 className="poppins text-white md:text-4xl text-[26px] font-bold leading-normal md:pb-10 pb-5">What perks you Get from Us?</h2>
  <p className="poppins text-white md:text-[16px] text-xs font-normal leading-normal md:pb-10 pb-5">In an internship for web app development, you gain hands-on experience, mentorship, and the opportunity to contribute to real-world projects, enhancing your skills and preparing you for future career opportunities.</p>
</div>
</div>


      {/*-----------What perks you Get from Us? end-*/}


      {/*--------Completion Certificate  start-----------*/}

<div className="md:flex md:gap-20 md:justify-center block">

  <div>

    <div className="flex gap-2 w-[420px]">
      <img src={one} alt="" className="w-10 h-10 bg-[#FF002A] rounded-full"/>
      <div className="pl-5 md:pb-10 pb-5">
      <h3 className="poppins text-white md:text-xl text-xl font-bold leading-normal pb-3">Completion Certificate</h3>
      <p className="poppins text-white text-[17px] font-normal leading-normal pb-5 opacity-[70%]">Interns receive a completion certificate for web & app development & design.</p>
      </div>
    </div >
    <div className="flex gap-2 w-[420px]">
    <img src={two} alt="" className="w-10 h-10 bg-[#FF002A] rounded-full"/>
      <div className="pl-5 md:pb-10 pb-5"><h3 className="poppins text-white md:text-xl text-xl font-bold leading-normal pb-3">Paid Internship</h3>
      <p className="poppins text-white text-[17px] font-normal leading-normal pb-5 opacity-[70%]">Get paid by completing the projects and after completing development & design</p></div>
    </div>
    <div className="flex gap-2 w-[420px]">
    <img src={three} alt="" className="w-10 h-10 bg-[#FF002A] rounded-full"/>
     <div className="pl-5 md:pb-10 pb-5"> <h3 className="poppins text-white md:text-xl text-xl font-bold leading-normal pb-3">Mentorship</h3>
     <p className="poppins text-white text-[17px] font-normal leading-normal pb-5 opacity-[70%]">The internship includes mentorship for your projects.</p></div>
    </div>
  </div>



  <div><img src={compimg} alt=""></img></div>
</div>
</div>
      {/*--------Completion Certificate  end-----------*/}
      <Footer />
    </div>
  );
};

export default Internship;
