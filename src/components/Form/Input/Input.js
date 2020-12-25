import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	border: none;
	border-radius: 3px;
`;

const fieldRow = {
	margin: '2rem 0',
};

const Input = (props) => {
	return (
		<div className='field' style={fieldRow}>
			<div className='control'>
				<InputField
					className='input is-rounded'
					type={props.type}
					placeholder={props.placeholder}
					value={props.firstName}
				/>
			</div>
		</div>
	);
};

export default Input;
