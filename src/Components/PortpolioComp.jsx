import React from 'react'




const PortpolioComp = (props) => {
  return (
    <div>
         <div className='w-[650px] border border-[#F90629] mb-20 rounded-xl p-10'>
          <h2 className='inter font-semibold text-4xl text-white pb-5'>{props.Heading}</h2>
          <p className='inter font-normal text-xl text-[#828282] pb-5'>{props.Details}</p>
          <img src={props.pimg} alt='' className='w-full'/>

        </div>
    </div>
  )
}

export default PortpolioComp