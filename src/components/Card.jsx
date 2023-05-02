import React from "react";

const Card = ({ item: { images, place, location } }) => {
  return (
    <>
      <div >
        <img src={images} alt="" className=' h-80  p-3 rounded'/>
        <div  className="flex  px-3 justify-between">
          <div>
          <h2>{place}</h2>
          <p>{location}</p>
          </div>
          <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Read More</button>
        </div>
      </div>
    </>
  );
};

export default Card;
