import React from 'react'

const Cardservise = (props) => {
  return (
    <div>

        <div>
            <div className='w-[320px] h-[225px] border border-white rounded-lg p-5'>
                <img src={props.Scardimg} alt='' className='pb-3 pt-5 pl-3 duration-300 hover:scale-125'/>
                <h3 className='inter text-[18px] text-white font-bold tracking-normal pb-2 pt-2'>{props.Scardtitel}</h3>
                <p className='inter text-[14px] text-[#9E9E9E] font-normal tracking-wide w-[225px]'>{props.Scardpara}</p>
            </div>

        </div>
    </div>
  )
}

export default Cardservise