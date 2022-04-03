import React from 'react';
import './Home.css';
import image from '../Assets/top-banner.jpg';

const Home = () => {
    return (
      <div className="home flex items-center justify-around my-8">
        <div>
          <h1 className="text-6xl font-bold">
            WE SEE...<br></br>WHAT CAN BE
          </h1>
          <p className="text-justify mt-5">
            Elite Interior Design provides premium interior design services that
            guarantee results.<br></br> Elite Interior specializes in Home
            Renovations, New Builds, Decor and Commercial Projects.<br></br> We
            offer interior design services within all over the country mostly in
            city areas.
          </p>
        </div>
        <img src={image} alt="" />
      </div>
    );
};

export default Home;