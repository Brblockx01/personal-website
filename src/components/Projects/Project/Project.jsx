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



// const Skill = ({ skillName, skillImage, skillTitle }) => {
//     return (
//       <div className='skill-container' title={skillTitle}>
//           <img className='skill-img' src={skillImage} alt="" />
//           <h1 className='skill-name'>{skillName}</h1>
//       </div>
//     )
//   }

{/* <a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a> */}