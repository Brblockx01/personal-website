import React from 'react';
import './Scss/Social.css';
import { FaGithub, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";
import { IoShareSocial } from 'react-icons/io5';

const Social = () => {
  return (
    <div className='social-component-container'>
      <div className='social-title-container'>
        <h1 className='social-component-title'>Contact/Social</h1>
        <i className='social-title-icon'><IoShareSocial /></i>
      </div>
        <p className='email-text'>Email At: br.block.chain.x01@gmail.com <br />
        or find me on:
        </p>
        <div className='social-icons-container'>
          <a title='Github' href='https://github.com/Brblockx01' target={"_blank"}>
            <FaGithub className='social-icon'/>
          </a>
          <a title='Twitter' href='https://twitter.com/bit_Philosopher' target={"_blank"}>
            <FaTwitterSquare className='social-icon'/>
          </a>
          <a title='LinkedIn' href='https://www.linkedin.com/in/bryan-martinez-248a93235/' target={"_blank"}>
            <FaLinkedinIn className='social-icon'/>
          </a>
        </div>
    </div>
  )
}

export default Social;