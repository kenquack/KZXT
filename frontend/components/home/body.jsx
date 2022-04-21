import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './body_carousel';
const Body = () => {
    window.scrollTo(0, 0)
    return (
        <div className='home-body'>
            <div className='intro'>
                <h2>Function & Lift </h2>
                <p>Introducing the KZXT Function Keyboard and Lift Mouse</p>
                <Link to='/products/11' id='intro-link'>Start Clicking</Link>
            </div>
            <img src={window.homePhotoURL} className="home-photo" />
            <Carousel />
        </div>

    )
};

export default Body;
