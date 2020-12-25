import React, { useState } from 'react';
import { Link } from 'gatsby';
import InputField from '../components/Form/Input/Input';
import styled from 'styled-components';
import img from '../assets/img/zuerich.jpg';
import Button from '../components/Button/Button';
import TextareaField from '../components/Form/Textarea/TextareaField';
import useForm from 'react-hook-form';
import ContactForm from '../components/Form/ContactForm/ContactForm';
import github from '../assets/svg/Github.svg';
import linkedin from '../assets/svg/Linkedin.svg';

const ContactPageBG = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	&::before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0.05;
		background-image: url(${img});
		background-repeat: no-repeat;
		background-position: 50% 0;
		background-size: cover;
	}
	.contactPageContent {
		width: 75vw;
		position: relative;
		z-index: 100;
		background: radial-gradient(
			at 50% 0%,
			rgba(0, 0, 0, 0),
			rgba(255, 255, 255, 0.3)
		);
		backdrop-filter: blur(10px);
		border-radius: 15px;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
		padding: 2.5rem;
	}
`;

export default function Contact(props) {
	return (
		<ContactPageBG>
			<div className='contactPageContent'>
				<div className='columns'>
					<div className='column is-half'>
						<ContactForm></ContactForm>
					</div>
					<div className='column'>
						<h1>Contact me</h1>
						<p>
							Feel free to reach out. Drop my a few lines or follow me on
							linkedIn or Github.
						</p>
						<Link to='https://github.com/chuathedog'>
							<img src={github} />
						</Link>
						<Link to='https://www.linkedin.com/in/denniseitner/'>
							<img src={linkedin} />
						</Link>
					</div>
				</div>
			</div>
		</ContactPageBG>
	);
}
