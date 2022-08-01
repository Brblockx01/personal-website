import React from 'react'

const Project = ({ projectLink, projectName, projectImage, projectDescription }) => {
  return (
    <a href={projectLink} target="_blank" >
        <div className='project-container'>
            <img src={projectImage} className='project-image'/>
            <h1>{projectName}</h1>
            <h3 className='project-description'>{projectDescription}</h3>
        </div>
    </a>
  )
}

export default Project;