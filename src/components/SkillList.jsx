import React from 'react';
import { skillsArr } from './../example/skillsArr';
import { PopMessage } from './PopMessage';
import { Skill } from './Skill';

export default function SkillList() {
	const deferChecker = skillsArr;
	const defer = deferChecker.length;

	return (
		<div className='skill-list'>
			{defer ?
				skillsArr.map(def => (
					<Skill
						skill={def.skill}
						color={def.color}
						levels={def.level}
						txtColor={def.textColor}
						key={def.skill}
					/>
				))
			:	<PopMessage />}
		</div>
	);
}
