import React, { Component } from 'react';

import styled from 'styled-components';

// Forms, inputs, buttons

export const Form = styled.form`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Input = styled.input`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	border: none;
	border-radius: 3px;
`;

export const Button = styled.button`
	width: 300px;
	height: 35px;
	background-color: #5995ef;
	color: #fff;
	border-radius: 3px;
`;

export const Textarea = styled.textarea`
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	border-radius: 1rem;
	border: none;
	height: 200px;
`;

// Text

export const Title = styled.h1`
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
	color: #4d4d4d;
	font-size: 2.2em;
`;

export const Title2 = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
	color: #4d4d4d;
	font-size: 1.8em;
`;

export const Text = styled.p`
	font-family: 'Raleway', sans-serif;
	color: ${(props) => props.color || '#4d4d4d'};
`;
