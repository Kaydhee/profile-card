import React from 'react';

const Skilllist = ({ skillObj }) => {
	// console.log(skillObj);
	return (
		<li
			style={{ backgroundColor: skillObj.color }}
			className='skill__span'>
			{skillObj.skill} {`${skillObj.level === 'advanced' ? '💪' : '😒'}`}
		</li>
	);
};

export default Skilllist;
