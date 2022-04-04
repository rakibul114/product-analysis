import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';


const Reviews = () => {
    const [services, setServices] = useServices();
    return (
      <div>
        <h1 className="text-5xl text-center my-5">What Our Clients Say...</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
            {
                services.map((service) => (
                <Service key={service.id} service={service}></Service>
                ))
            }
        </div>
      </div>
    );
};

export default Reviews;