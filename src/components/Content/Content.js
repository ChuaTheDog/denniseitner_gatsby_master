import React from 'react';
import ContentStyles from './content.module.scss';

const content = (props) => {
	return (
		<>
			<div className={ContentStyles.content}>
				<section className='section'>
					<div className='container'>{props.children}</div>
				</section>
			</div>
		</>
	);
};

export default content;
