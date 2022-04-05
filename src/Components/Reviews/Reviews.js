import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';


const Reviews = () => {
    const [services, setServices] = useServices();
    return (
      <div>
        <h1 className="text-5xl text-center my-5 py-10">
          What Our Clients Say...
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center w-5/6 py-6 mx-auto">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Reviews;