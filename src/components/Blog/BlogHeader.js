import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
	background-image: linear-gradient(180deg, #bf1a90 0%, #54135d 100%);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	width: 100vw;
	top: 0;
	z-index: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 5rem;
		z-index: 999;
	}
`;

const FeaturedImage = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	img {
		width: 100vw;
		max-height: 100vh;
		overflow: hidden;
	}
`;

const BlogHeader = ({ blogtitle, featuredImage }) => {
	const featuredImageBG = featuredImage ? featuredImage : '';
	return (
		<HeaderStyles style={{ backgroundImage: 'url(' + featuredImageBG + ')' }}>
			<FeaturedImage></FeaturedImage>

			<h1>{blogtitle}</h1>
		</HeaderStyles>
	);
};

export default BlogHeader;
