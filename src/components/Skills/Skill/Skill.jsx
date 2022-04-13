import React from 'react';

const Skill = ({ skillName, skillImage, skillTitle }) => {
  return (
    <div className='skill-container' title={skillTitle}>
        <img className='skill-img' src={skillImage} alt="" />
        <h1 className='skill-name'>{skillName}</h1>
    </div>
  )
}

export default Skill;