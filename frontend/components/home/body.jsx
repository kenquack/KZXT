import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className='home-body'>
            <img src={window.homePhotoURL} className="home-photo" />
        </div>
    )
};

export default Body;
