import React from 'react';
import './Service.css';

const Service = ({service}) => {
    console.log(service);
    const { name, image, rating, desc } = service;
    return (
      <div className="single-review">
        <img src={image} alt="" />

        <div className='card-info'>
          <h3 className='text-2xl font-semibold my-2'>{name}</h3>
          <p>Description: {desc}</p>
          <p>
            <small>Ratings: {rating} Stars</small>
          </p>
        </div>
      </div>
    );
};

export default Service;