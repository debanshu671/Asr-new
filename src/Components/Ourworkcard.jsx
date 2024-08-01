import React from "react";

const Ourworkcard = (props) => {
  return (
    <>
      <div className="px-10 md:py-10 py-5">
        <div className="md:w-[425px] w-[344px]  border border-white p-3">
          <h2 className="pb-3 poppins font-normal text-white text-xl">
            {props.Cardtitel}
          </h2>
          <p className="pb-3 text-[15px] text-[#828282] poppins font-normal">
            {props.Cardpara}
          </p>
          <img src={props.boximg} alt="Cardtitel" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Ourworkcard;
