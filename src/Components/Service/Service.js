import React from 'react';
import './Service.css';


const Service = ({service}) => {    
    const { name, image, rating, desc } = service;
    return (
      <div className="single-review rounded-2xl">
        <p className="my-7 mx-6">{desc.length >= 20 ? desc.slice(0,450) : name}</p>
        <div className="card-info">
          <img className="rounded-full" src={image} alt="" />
          <div>
            <h3 className="text-xl font-semibold my-2">{name}</h3>
            <p>
              <small>Ratings: {rating} Stars</small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Service;