import React from 'react'
import CountUp from 'react-countup';

const Countup = () => {
  return (
    <>
    <div className='px-[10%] py-20'>
        <div className='flex justify-between items-center'>
        <div className='text-center'>
                <h1 className='md:text-5xl text-xl poppins font-medium text-white md:pb-3'><CountUp start={0} end={100} duration={5} delay={0} /><span>+</span></h1>
                <p className='md:text-xl text-xs poppins font-normal text-white pb-3 '>Customers visit ASR every month <br/>to get their service done.</p>

        </div>
        <div className='text-center'>
                <h1 className='md:text-5xl text-xl poppins font-medium text-white md:pb-3'><CountUp start={0} end={100} duration={5} delay={0} /><span>%</span></h1>
                <p className='md:text-xl text-xs poppins font-normal text-white pb-3 '>Satisfaction rate comes from our<br/> awesome customers.</p>

        </div>
        <div className='text-center'>
                <h1 className='md:text-5xl text-xl poppins font-medium text-white md:pb-3'><CountUp start={0} end={4.9} duration={5} delay={0} />
                <span>/5.0</span></h1>
                <p className='md:text-xl text-xs poppins font-normal text-white pb-3 '>Average customer ratings we<br/> have got .</p>

        </div>

        </div>

    </div>
    </>
  )
}

export default Countup