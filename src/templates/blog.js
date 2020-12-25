import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import BlogHeader from '../components/Blog/BlogHeader';
import BlogContent from '../components/Blog/BlogContent';
import styled from 'styled-components';

export default function Template({
	data,
	pageContext, // this prop will be injected by the GraphQL query below.
}) {
	const { frontmatter, body } = data.mdx;
	const { previous, next } = pageContext;
	console.log(pageContext);
	if (previous === null) {
	}
	//const previousLink = false ? null : '/blog' + previous.fields.slug;
	const Image = styled(Img)`
		border-radius: 5px;
	`;
	return (
		<div>
			{frontmatter.featuredImage ? (
				<BlogHeader
					blogtitle={frontmatter.title}
					featuredImage={frontmatter.featuredImage.publicURL}></BlogHeader>
			) : null}

			<BlogContent body={body}></BlogContent>
			{previous === false ? null : (
				<>
					{previous && (
						<Link to={`/blog${previous.fields.slug}`}>
							<p>{previous.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
			{next === false ? null : (
				<>
					{next && (
						<Link to={`/blog${next.fields.slug}`}>
							<p>{next.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
		</div>
	);
}
export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
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
`;
