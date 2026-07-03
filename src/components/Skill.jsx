import React from 'react';

export function Skill({ skill, color, levels, txtColor }) {

  return (
    <div className='skill' style={{ backgroundColor: color, color: txtColor }}>
      <span>{skill}</span>
      <span>{levels === 'Beginner' && '👶🏻'}</span>
      <span>{levels === 'Intermediate' && '👍🏻'}</span>
      <span>{levels === 'Advance' && '💪🏻'}</span>
    </div>
  );
}
