import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PortpolioComp from "../Components/PortpolioComp";
import { Link } from "react-router-dom";
import TestPage from "../objects/TestimonialPage";

const testdata = (val) => {
  return (
    <PortpolioComp
      Heading={val.testHeading}
      Details={val.testDetails}
      pimg={val.testImg}
    />
  );
};

const Portfolio = () => {
  return (
    <>
      <Header />

      <div className="px-[10%] py-20 w-full">
        <div className=" flex-row justify-center">
          <ul className="flex md:gap-20 gap-10 text-white justify-center inter font-normal text-2xl leading-normal">
            <li>
              <Link>All</Link>
            </li>
            <li>
              <Link>Website</Link>
            </li>
            <li>
              <Link>App</Link>
            </li>
            <li>
              <Link>UI/UX</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[12%] py-10">
        <div className="flex justify-between flex-wrap">
          {TestPage.map(testdata)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
