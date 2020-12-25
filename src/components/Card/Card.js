import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostCard = styled.div`
	display: flex;
	padding: 1rem;
	@media (min-width: 40rem) {
		width: 50%;
	}
	@media (min-width: 56rem) {
		width: 33.3333%;
	}
	.cardLink {
		background-color: white;
		border-radius: 0.25rem;
		box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;

		.cardContent {
			padding: 1rem;
			color: red;
			p {
				color: black;
			}
		}
	}
`;

const Card = ({ post }) => {
	console.log(post);
	return (
		<PostCard>
			<Link to={`/blog/${post.frontmatter.slug}`} className='cardLink'>
				{!!post.frontmatter.featuredImage ? (
					<img src={post.frontmatter.featuredImage.publicURL} />
				) : null}
				<div className='cardContent'>
					<h1>{post.frontmatter.title}</h1>
					<p className='cardText'>{post.frontmatter.excerpt}</p>
				</div>
			</Link>
		</PostCard>
	);
};

export default Card;
