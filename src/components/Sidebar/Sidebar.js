import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import sidebarStyles from './sidebar.module.scss';
import styled from 'styled-components';

const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '36px',
		top: '36px',
	},
	bmBurgerBars: {
		background: '#fff',
	},
	bmBurgerBarsHover: {
		background: '#a90000',
	},
	bmCrossButton: {
		height: '24px',
		width: '24px',
	},
	bmCross: {
		background: '#bdc3c7',
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%',
	},
};

export default (props) => {
	return (
		<Menu styles={styles} className={sidebarStyles.sidebar}>
			<a className='menu-item' href='/'>
				Home
			</a>
			<a className='menu-item' href='/about'>
				About
			</a>
			<a className='menu-item' href='/blog'>
				Blog
			</a>
			<a className='menu-item' href='/contact'>
				Contact
			</a>
		</Menu>
	);
};
