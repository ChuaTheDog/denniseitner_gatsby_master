/*
TODO: 
- Include this in contact form
- remove form after submission
- prevent multiple submission
- add honeypot
*/

import React, { useState } from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import styled from 'styled-components';
import Button from '../../Button/Button';

import { Input, Title, Textarea } from '../Formtheme';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactForm = () => {
	const [formSuccess, setformSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(25, 'Must be 15 characters or less')
				.required('Please indicate a name'),
			email: Yup.string().email('Invalid email address').required('Required'),
			botField: Yup.string().max(1, 'you are not supposed to fikk this out'),
		}),
		onSubmit: async (values, e) => {
			await sleep(500);
			const { name, email, message } = values;
			const response = await fetch(
				`${process.env.GATSBY_SERVERLESS_BASE}/contactForm/contactForm`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({ name, email, message }),
				}
			);
			//alert(JSON.stringify(values, null, 2));

			setformSuccess(true);
		},
	});

	return (
		<div className='container'>
			{formSuccess ? (
				`Thank you ${formik.values.name}. I'll do my best to answer`
			) : (
				<form onSubmit={formik.handleSubmit}>
					<p className='is-hidden'>
						<label>
							Don’t fill this out if you’re human: <input name='bot-field' />
						</label>
					</p>
					<div className='field'>
						<label htmlFor='Name'> Name</label>
						<Input
							id='name'
							name='name'
							type='text'
							className='input is-rounded'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
						/>
						{formik.touched.name && formik.errors.name ? (
							<p className='help is-danger'>{formik.errors.name}</p>
						) : null}
					</div>{' '}
					<div className='field'>
						<label htmlFor='email'>Email</label>
						<Input
							id='email'
							name='email'
							type='email'
							className='input is-rounded'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<p className='help is-danger'>{formik.errors.email}</p>
						) : null}
					</div>
					<div className='field'>
						<label>Message</label>
						<div className='control'>
							<Textarea
								name='message'
								id=''
								cols='30'
								rows='10'
								className='textarea is-rounded'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.message}></Textarea>
						</div>
					</div>
					<Button type='submit'></Button>
				</form>
			)}
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.GOOGLE_RECAPTCHA_KEY}
				useRecaptchaNet='[optional_boolean_value]'></GoogleReCaptchaProvider>
		</div>
	);
};

export default ContactForm;
