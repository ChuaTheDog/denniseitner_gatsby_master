import React from 'react';
import HeroStyles from './hero.module.scss';

const Hero = () => {
	return (
		<div>
			<section className={HeroStyles.hero}>
				<h1 className='title'>
					My Name is Dennis and I create digital experiances.
				</h1>
				<h2 className='subtitle'>Hero subtitle</h2>
			</section>
		</div>
	);
};

export default Hero;
