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
          <button className="text-center text-white font-bold rounded-md py-2 mt-6 w-2/12 focus:outline-none bg-red-900">
            LIVE DEMO
          </button>
        </div>
        <img src={image} alt="" />
      </div>
    );
};

export default Home;