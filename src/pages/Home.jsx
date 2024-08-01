import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Ourworkcard from "../Components/Ourworkcard";
import Intership from "../Components/Intership";
import Ourstory from "../Components/Ourstory";
import Footer from "../Components/Footer";
import Countup from "../Components/Countup";
import star from "../assets/home/star-hero-sec.png";
import Scard from "../objects/Servisecard";
import Cardservise from "../Components/Cardservise";
import Testicard from "../objects/Testimonial";
import Latestwork from "../objects/Latestwork";
import TestiMonial from "../Components/TestiMonial";


console.log(Latestwork[0].cardtitel);

const Home = () => {
  {
    /*- function for latest work section---*/
  }

  function card(val) {
    return (
      <Ourworkcard
        Cardtitel={val.cardtitel}
        Cardpara={val.carddetails}
        boximg={val.imgsrc}
      />
    );
  }

  {
    /*- function for latest work section end---*/
  }

  {
    /*- function for servise section---*/
  }

  function Scardsec(val) {
    return (
      <Cardservise
        Scardimg={val.simg}
        Scardtitel={val.stitel}
        Scardpara={val.spara}
      />
    );
  }

  {
    /*- function for servise section end---*/
  }

  {
    /*------testimonial section start---*/
  }

  function testimonial(val) {
    return (
      <TestiMonial
        testimg={val.testimg}
        testiText={val.text}
        client={val.clientname}
        post={val.degignation}
      />
    );
  }

  {
    /*------testimonial section end---*/
  }
  return (
    <div className="bg-white w-full">
      <Header />
      <Hero />

      {/*our Letest work section start----*/}

      <div className="px-[10%] py-20">
        <div className="pb-10">
          <div className="md:w-[750px] w-full">
            <div className="w-[250px] flex gap-2">
              <span className="poppins font-semibold text-[#F90629] leading-normal tracking-widest text-[17px] pb-3">
                PORTFOLIO
              </span>
              <img src={star} alt="" className="w-5 h-5" />
            </div>
            <h2 className="poppins font-bold text-white leading-normal text-4xl pb-3">
              Our Latest Work
            </h2>
            <p className="poppins font-medium text-white text-[17px] pb-">
              Our latest work involves developing a state-of-the-art website and
              app for educational management. We are also designing an intuitive
              UI to enhance user experience, ensuring seamless navigation, data
              security, and streamlined administrative processes.
            </p>
          </div>
          <div></div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {Latestwork.map(card)}
        </div>
      </div>

      {/*our Letest work section end----*/}

      {/*servise section start----*/}

      <div className="px-[10%]">
        <div className="w-[250px] flex gap-2">
          <span className="poppins font-semibold text-[#F90629] leading-normal tracking-widest text-[17px] pb-3">
            SERVICE
          </span>
          <img src={star} alt="" className="w-5 h-5" />
        </div>
        <h2 className="poppins font-bold text-white leading-normal text-4xl pb-2">
          Exceeding Expectations
        </h2>
        <p className="poppins font-medium text-white text-[17px]">
          Lorem ipsum dolor sit amet consectetur. Vel pretium euismod
          pellentesque orci mi.
        </p>
      </div>

      <div className=" px-[10%] flex gap-[10rem] flex-wrap justify-center py-20">
        {Scard.map(Scardsec)}
      </div>
      {/*servise section end----*/}

      <Intership />
      <Ourstory />
      <Countup />

      {/*-----TESTIMONIALS section start-----*/}
      <div className="px-[10%]">
        <div className="w-[250px] flex gap-2">
          <span className="poppins font-semibold text-[#F90629] leading-normal tracking-widest text-[17px] pb-3">
            TESTIMONIALS
          </span>
          <img src={star} alt="" className="w-5 h-5" />
        </div>
        <h2 className="poppins font-bold text-white leading-normal text-4xl pb-2">
          Our clients Says
        </h2>
        <p className="poppins font-medium text-white text-[17px]">
          Our experience with this service has been exceptional. The team is
          professional, attentive, and consistently delivers high-quality work.
          We highly recommend them for anyone seeking reliable and efficient
          solutions. They've exceeded our expectations every step of the way.
        </p>
      </div>

      <div className=" px-[10%] flex gap-[14rem] flex-wrap justify-center py-20">
        {Testicard.map(testimonial)}
      </div>

      {/*-----TESTIMONIALS section end-----*/}

      <Footer />
    </div>
  );
};

export default Home;
