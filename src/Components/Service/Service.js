import React from 'react';
import './Service.css';
// Rating imported
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const Service = ({service}) => {    
    const { name, image, rating, desc } = service;
    return (
      <div className="single-review rounded-2xl">
        <FontAwesomeIcon
          className="p-2 w-10 text-gray-400"
          icon={faQuoteLeft}
        ></FontAwesomeIcon>
        <p className="my-7 mx-6 pt-8">
          {desc.length > 20 ? desc.slice(0, 200) : name}
        </p>
        <div className="card-info">
          <img className="rounded-full ml-0" src={image} alt="" />
          <div>
            <h3 className="text-xl font-semibold my-2 ml-2">{name}</h3>
          </div>
        </div>
        <p className="text-center my-2 font-semibold">
          <small>
            Ratings: {rating} 
            <Rating className='ml-1'
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </small>
        </p>
      </div>
    );
};

export default Service;