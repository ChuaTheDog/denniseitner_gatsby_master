import React from 'react';
import buttonStyle from './button.module.scss';

const Button = () => {
	return (
		<div>
			<button className={`${buttonStyle.button} button`}>Send</button>
		</div>
	);
};

export default Button;
