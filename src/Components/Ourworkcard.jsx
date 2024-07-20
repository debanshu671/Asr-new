import React from 'react'

const Ourworkcard = (props) => {


  return (

   <>
    <div>
        <div className='w-[300px] h-[400px] border border-white'>
            <h2>{props.Cardtitel}</h2>
            <p>{props.Cardpara}</p>
            <img src={props.Cardimg} alt=''/>
            
        </div>
    </div>
   </>
  )
}

export default Ourworkcard