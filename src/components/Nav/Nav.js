import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 2vh;
	z-index: 99999;
	border: 1px solid green;
`;

const Menu = styled.div`
	width: 33vw;
	height: 100vh;
	position: relative;
	top: 0;
	left: 0;
	display: block;
	transition: all 0.75s ease;
	transform: translateX(-100%);
	background-image: linear-gradient(221deg, #522ac9 0%, #220f61 100%);
	box-shadow: 0 14px 27px 9px rgba(0, 0, 0, 0.5);
	border-radius: 8px 8px 0 8px 8px;
	&.is-open {
		transform: translateX(0);
	}
	a {
	}
`;

const Nav = () => {
	const [isActive, setisActive] = React.useState(false);
	const [isOpen, setisOpen] = React.useState(false); // returns a stateful value, and a function to update it

	return (
		<NavStyles>
			<h1>{isActive}</h1>
			<div className={isOpen ? 'is-open' : ''}>
				<button
					onClick={() => {
						setisOpen(!isOpen);
					}}>
					Toggle Menu
				</button>
			</div>
			<nav role='navigation' aria-label='main navigation'>
				<div className='navbar-brand'>
					<Link to='/blog'>Blog</Link>
					<Link to='/contact'>Contact</Link>
					<a href='/' className='navbar-item'>
						<img
							src='https://bulma.io/images/bulma-logo.png'
							alt='Logo'
							width='112'
							height='28'
						/>
					</a>

					<a
						onClick={() => {
							setisActive(!isActive);
						}}
						role='button'
						className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div
					id='navbarBasicExample'
					className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className='navbar-end'>
						<div className='navbar-item'>
							<a href='/' className='navbar-item'>
								Home
							</a>
							<a href='/' className='navbar-item'>
								Documentation
							</a>
						</div>
					</div>
				</div>
			</nav>
			<Menu className={isOpen ? 'is-open' : ''}>
				<Link to='/blog'>Blog</Link>
				<Link to='/formik'>Contact</Link>
			</Menu>
		</NavStyles>
	);
};

export default Nav;
