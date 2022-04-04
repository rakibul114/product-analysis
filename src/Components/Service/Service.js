import React from 'react';
import './Service.css';


const Service = ({service}) => {    
    const { name, image, rating, desc } = service;
    return (
      <div className="single-review rounded-2xl">
        <p className="my-7 mx-6">
          {desc.length > 20 ? desc.slice(0, 400) : name}
        </p>
        <div className="card-info">
          <img className="rounded-full ml-0" src={image} alt="" />
          <div>
            <h3 className="text-xl font-semibold my-2 ml-2">{name}</h3>
          </div>
        </div>
        <p className="text-center my-2 font-semibold">
          <small>Ratings: {rating} Stars</small>
        </p>
      </div>
    );
};

export default Service;