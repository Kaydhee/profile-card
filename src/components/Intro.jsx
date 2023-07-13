import React from 'react';
import Skilllist from './Skilllist';

const Intro = () => {
	return (
		<section className='intro'>
			<h1>Daniel David</h1>

			<p>
				Front-end Web Developer and teacher at The RootHub, When not coding i
				like to play COD Mobile, Eat, Enjoy Good music or Binge watch movies
			</p>

			<div className='skill__list'>
				<Skilllist
					skill='HTML & CSS'
					emoji='💪'
					color='green'
				/>

				<Skilllist
					skill='JavaScript'
					emoji='😉'
				/>
				<Skilllist
					skill='Web Design'
					emoji='💪'
					color='Blue'
				/>
				<Skilllist
					skill='Git and GitHub'
					emoji='💪'
					color='black'
				/>
				<Skilllist
					skill='React'
					emoji='💪'
					color='maroon'
				/>
			</div>
		</section>
	);
};

export default Intro;
