import React from 'react';
import image from '../Assets/404-page.jpg';

const NotFound = () => {
    return (
        <div className='page-notfound'>
            <h1>This page you are looking for is not available</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;