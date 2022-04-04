import React from 'react';
import './Home.css';
import image from '../Assets/top-banner.jpg';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [services, setServices] = useServices();

  const navigate = useNavigate();

  const showAllReviews = () => {
    navigate('/reviews');
  };
    return (
      <div>
        <div className="home flex items-center justify-around my-8">
          <div>
            <h1 className="text-6xl font-bold">
              WE SEE...<br></br>WHAT CAN BE
            </h1>
            <p className="text-xl text-justify mt-5">
              Elite Interior Design provides premium interior design services
              that guarantee results.<br></br> Elite Interior specializes in
              Home Renovations, New Builds, Decor and Commercial Projects.
              <br></br> We offer interior design services within all over the
              country mostly in city areas.
            </p>
            <button className="text-center text-white font-bold rounded-md py-2 mt-6 w-2/12 focus:outline-none bg-red-900">
              LIVE DEMO
            </button>
          </div>
          <img src={image} alt="" />
        </div>
        <h1 className="text-5xl text-center font-bold my-8">
          Customers Reviews
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center w-5/6 mx-auto">
          {services.slice(0, 3).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        
        <button
          onClick={showAllReviews}
          className="review-button text-center text-white font-bold rounded-md py-2 my-6 w-2/12 bg-red-900"
        >
          See All Reviews
        </button>
      </div>
    );
};

export default Home;