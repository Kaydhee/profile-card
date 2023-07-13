import React from 'react';

const Skilllist = (props) => {
	return (
		<span
			className='skill__span'
			style={{ backgroundColor: props.color }}>
			{props.skill} {props.emoji}
		</span>
	);
};

export default Skilllist;
