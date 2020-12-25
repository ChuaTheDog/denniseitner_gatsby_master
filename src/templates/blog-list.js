import React from 'react';
import { Link, graphql } from 'gatsby';
import PostCard from '../components/Card/Card';
import styled from 'styled-components';

const blogList = (data) => {
	const posts = data.data.allMdx.edges;
	const { currentPage, numPages } = data.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage =
		currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	console.log(posts);
	const { edges } = data.data.allMdx;

	const Posts = edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostCard key={edge.node.id} post={edge.node} />);

	const PostContainer = styled.div`
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	`;
	return (
		<div className='container'>
			<PostContainer>{Posts}</PostContainer>

			<nav
				className='pagination is-centered'
				role='navigation'
				aria-label='pagination'>
				{!isFirst && (
					<Link
						to={prevPage}
						rel='prev'
						className='pagination-previous has-text-white'>
						← Previous Page
					</Link>
				)}
				<ul className='pagination-list'>
					{Array.from({ length: numPages }, (_, i) => (
						<li key={`pagination-number${i + 1}`}>
							<Link
								to={`/blog/${i === 0 ? '' : i + 1}`}
								className='pagination-link has-text-white'>
								{i + 1}
							</Link>
						</li>
					))}
				</ul>
				{!isLast && (
					<Link
						to={nextPage}
						rel='next'
						className='pagination-next has-text-white'>
						Next Page →
					</Link>
				)}
			</nav>
		</div>
	);
};

export default blogList;

export const pageQuery = graphql`
	query blogPageQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
						featuredImage {
							id
							publicURL
						}
					}
				}
			}
		}
	}
`;
