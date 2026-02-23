import React from 'react'
import './NewsLetter.css'
import Button from 'react-bootstrap/Button';


const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type='email' placeholder='Enter your email' />
                <Button variant="dark">Subscribe</Button>
            </div>
        </div>
    )
}

export default NewsLetter
