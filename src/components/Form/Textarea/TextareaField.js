import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	border-radius: 1rem;
	border: none;
	height: 200px;
`;

const fieldRow = {
	margin: '2rem 0',
};

const TextareaField = (props) => {
	return (
		<div className='field' style={fieldRow}>
			<div className='control'>
				<StyledTextarea
					rows={20}
					className='input '
					placeholder={props.placeholder}
					value={props.firstName}
				/>
			</div>
		</div>
	);
};

export default TextareaField;
