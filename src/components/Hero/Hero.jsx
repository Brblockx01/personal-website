import React from 'react';
import avatar from '../../assets/me_.jpeg';
import './Scss/Hero.css';

const Hero = () => {
  return (
    <div className='hero-component-container'>
      <img className='avatar-img' src={avatar} alt="" />
      <span>
      <h1 className='hero-component-text'>Hi, thank you for checking out my website! <br />
      My name is Bryan Martinez. I develop front-end apps <br />
      and blockchain apps with Solidity <br />
      on the Ethereum blockchain.</h1>
      </span>
    </div>
  )
}

export default Hero;