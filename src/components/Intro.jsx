import React from 'react';
import Skilllist from './Skilllist';

const skillSet = [
	{
		skill: 'HTML-CSS',
		level: 'advanced',
		color: '#2662EA',
	},
	{
		skill: 'JavaScript',
		level: 'beginer',
		color: '#EFD81D',
	},
	{
		skill: 'Git and  GitHub',
		level: 'advanced',
		color: '#C3DCAF',
	},
	{
		skill: 'React',
		level: 'beginer',
		color: '#E84F33',
	},
	{
		skill: 'Web Design',
		level: 'advanced',
		color: '#68DAFB',
	},
];

const Intro = () => {
	const skillList = skillSet;

	return (
		<section className='intro'>
			<h1>Daniel David</h1>

			<p>
				Front-end Web Developer and teacher at The RootHub, When not coding i
				like to play COD Mobile, Eat, Enjoy Good music or Binge watch movies
			</p>

			<ul className='skill__list'>
				{skillList.map((skill) => (
					<Skilllist
						skillObj={skill}
						key={skill.skill}
					/>
				))}
			</ul>
			{/* 
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
			</div> */}
		</section>
	);
};

export default Intro;
