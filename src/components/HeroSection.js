import React from 'react'

const HeroSection = ({section : { title , image , desc , btn}}) => {
  
  return (
    <div  className='flex flex-col justify-center items-center'>
     <img src={image} alt="" className=' h-80  p-3 rounded' />
     <p>{title}</p>
     <h2>{desc} </h2>
   
     <button className='bg-gray-700 p-3 rounded hover:bg-gray-900'>{btn}</button>
    </div>
  )
}

export default HeroSection 
