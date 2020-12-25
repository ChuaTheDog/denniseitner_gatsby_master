import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogContentStyles = styled.div`
	min-height: 100vh;
	margin: 5rem 0;
	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;

const BlogContent = (props) => {
	return (
		<div>
			<BlogContentStyles>
				<div className='container'>
					<MDXRenderer>{props.body}</MDXRenderer>
				</div>
			</BlogContentStyles>
		</div>
	);
};

export default BlogContent;
