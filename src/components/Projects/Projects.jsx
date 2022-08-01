import React from 'react';
import './Scss/Projects.css';
import { IoExtensionPuzzleSharp } from 'react-icons/io5';
import Project from './Project/Project';
import { pcoin, eventstickets } from '../../assets/projectImgs';

const Projects = () => {
  return (
    <div className='projects-component-container'>
      <div className='projects-title-container'>
        <h1 className='projects-component-title'>Projects</h1>
        <i><IoExtensionPuzzleSharp className='projects-icon' /></i>
      </div>
      <div className="all-projects-container">
        <Project 
        projectLink={"https://luminous-kelpie-766d39.netlify.app/"} 
        projectName="PCoin" 
        projectImage={pcoin} 
        projectDescription={
        <p>
          An ERC20 token with an interface<br />
          to use in other projects.
        </p>
        }
        />
        <Project 
        projectLink={"https://monumental-manatee-77f45a.netlify.app/"} 
        projectImage={eventstickets} 
        projectName="Events-Tickets" 
        projectDescription={
        <p>
          A smart contract to mint<br />
          tickets for an event.
        </p>
        }
        />
      </div>
    </div>
  )
}

export default Projects;