import React from 'react';
import { html, css, javascript, solidity, react, hardhat, ethers, git, webpack, typescript, sass } from '../../assets/skills-icons/index';
import { FaTools } from 'react-icons/fa';
import Skill from './Skill/Skill';
import './Scss/Skills.css';

const Skills = () => {
  return (
    <div className='skills-component-container'>
      <div className='skills-title-container'>
        <h1 className='skills-component-title'>Tech stack</h1>
        <i><FaTools className='tools-icon' /></i>
      </div>
      <h3 className='skill-section-text'>Languages.</h3>
      <div className='skills-boxes-container'>
        <Skill 
          skillName="HTML" 
          skillTitle="HTML" 
          skillImage={html}
        />
        <Skill 
          skillName="CSS" 
          skillTitle="CSS" 
          skillImage={css}
        />
        <Skill 
          skillName="Javascript" 
          skillTitle="Javascript" 
          skillImage={javascript}
        />
        <Skill 
          skillName="Solidity" 
          skillTitle="Solidity" 
          skillImage={solidity}
        />
      </div>

      <h3 className='skill-section-text'>Frameworks and libraries.</h3>
      <div className='skills-boxes-container'>
      <Skill 
          skillName="React JS" 
          skillTitle="React Js" 
          skillImage={react}
      />
      <Skill 
          skillName="Hardhat" 
          skillTitle="Hardhat" 
          skillImage={hardhat}
      />
      <Skill 
          skillName="Ethers JS" 
          skillTitle="Ethers Js" 
          skillImage={ethers}
      />
      </div>

      <h3 className='skill-section-text'>Other.</h3>
      <div className='skills-boxes-container'>
      <Skill 
          skillName="GIT" 
          skillTitle="Git" 
          skillImage={git}
      />
      <Skill 
          skillName="Webpack" 
          skillTitle="Webpack" 
          skillImage={webpack}
      />
      <Skill 
          skillName="Typescript" 
          skillTitle="Typescript" 
          skillImage={typescript}
      />
      <Skill 
          skillName="Sass" 
          skillTitle="Sass" 
          skillImage={sass}
      />
      </div>
    </div>
  )
}

export default Skills;