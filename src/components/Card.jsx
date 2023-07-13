import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro';

import '../App.css';

const Card = () => {
	return (
		<section className='card'>
			<section className='data'>
				<Avatar />
				<Intro />
			</section>
		</section>
	);
};

export default Card;
