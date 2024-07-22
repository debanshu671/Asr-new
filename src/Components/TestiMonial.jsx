import React from 'react'

const TestiMonial = (props) => {
  return (
    <>
      <div className='pt-20 pb-10'>
        <div className="w-[350px] h-[352px] border border-white p-5 rounded-lg">

       <div className="W-[54px] H-[54px] rounded-full pt-3 pb-10"> <img src={props.testimg} alt="Cardtitel" className='' /></div>
        <p className="text-[21px] text-white poppins font-normal pb-10"> {props.testiText}
        </p>
            <div className='flex gap-3 items-center'>

          <h2 className="poppins font-bold text-white text-xl"> {props.client} </h2>
            
          
          <span className="poppins font-normal text-white text-xl opacity-70"> {props.post}</span>
          </div>
          
           
          
        </div>
      </div>
    </>
  )
}

export default TestiMonial