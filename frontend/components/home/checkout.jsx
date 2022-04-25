import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi'

class Checkout extends React.Component {
    render() {
        return (
            <div className='checkout-container'>
                <h2>Your order has been placed!</h2>
                <p>
                    Thank you for checking out my website! <br/><br/>
                    Feel free to check out my social media to see other projects!
                </p>
                <a href="https://github.com/kenquack" target="_blank"> <FiGithub /></a>
                <a href="https://www.linkedin.com/in/kennethquach/" target="_blank"> <FaLinkedin /></a>
            </div>
            
        )
    }
}

export default Checkout;