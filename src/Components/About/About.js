import React from 'react';
import image from '../Assets/about-cover.jpg';

const About = () => {
    return (
      <div>
        <div className="home flex items-center justify-around my-8 mx-auto grid md:grid-cols-2 grid-cols-1 w-5/6 justify-items-center">
          <div>
            <h1 className="text-8xl font-bold">
              Elite<br></br>Interior Design
            </h1>
            <p className="text-xl text-justify mt-5">
              Elite Interior Design provides premium interior design services
              that guarantee results.<br></br> Elite Interior specializes in
              Home Renovations, New Builds, Decor and Commercial Projects.
              <br></br> We offer interior design services within all over the
              country mostly in city areas.
            </p>
            <p className="font-bold text-justify mt-5">
              We help transform spaces with potential to beautiful homes to sell
              and live in.
            </p>
            <p className="text-slate-400 text-justify mt-5">
              At Elite Interior we believe that every space has more potential
              which we can tap into to help make your home<br></br> more
              appealing to buyers and sell it for top dollar or to redesign it
              to fit your family and lifestyle. Taking each <br></br>clients'
              situation, home style, location and buyer demographic into
              consideration, we tailor our services to maximize <br></br>impact
              on the space.
            </p>
          </div>
          <img className='my-6' src={image} alt="" />
        </div>
      </div>
    );
};

export default About;