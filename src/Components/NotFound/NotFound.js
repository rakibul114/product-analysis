import React from 'react';
import image from '../Assets/404-page.jpg';

const NotFound = () => {
    return (
      <div className="notfound-pic">        
        <img className="w-screen" src={image} alt="" />
      </div>
    );
};

export default NotFound;
