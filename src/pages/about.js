import React, { Fragment } from 'react';
import styled from 'styled-components';

import BlogHeader from '../components/Blog/BlogHeader';
import BlogContent from '../components/Blog/BlogContent';

const ContentStyles = styled.div`
	min-height: 100vh;
	margin: 5rem 0;
	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
const about = () => {
	return (
		<>
			<BlogHeader
				blogtitle='{Hello World}'
				featuredImage='{frontmatter.featuredImage.publicURL}'></BlogHeader>
			<div className='container'>
				<ContentStyles>
					<h2>Hello World</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eos
						laudantium minus vero error praesentium ducimus voluptas maxime
						officia quae mollitia natus obcaecati illum, animi, nisi, aliquid
						modi dignissimos alias.
					</p>
				</ContentStyles>
			</div>
		</>
	);
};

export default about;
