import React from 'react';

import Nav from '../Nav/Nav';
import Content from '../Content/Content';

import 'normalize.css';
import '../../assets/styles/styles.scss';
import Typography from '../../styles/Typography';
import Sidebar from '../Sidebar/Sidebar';
import bgStyle from './layout.module.scss';

export default function Layout({ children }) {
	return (
		<div className='bgStyle.bg'>
			<Typography />
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			{children}
		</div>
	);
}
