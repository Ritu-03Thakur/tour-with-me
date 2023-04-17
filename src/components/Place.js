import React from "react";
import Card from "./Card";

const Place = (props) => {
  return (
    <>
    <div className="flex flex-col gap-2 justify-center items-center" >
      <h1 className="font-sans " style={{fontSize : "35px"}}>Popular Destinations</h1>
      <p>From historical cities to natural splendours, come see the best of india</p>
      <div className="flex gap-2">
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Spiritual</button>
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Art</button>
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Food And Cuisine</button>
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Heritage</button>
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Adventure</button>
        <button className='bg-gray-700 p-2 rounded hover:bg-gray-900'>Shopping</button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        {props.place.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Place;
