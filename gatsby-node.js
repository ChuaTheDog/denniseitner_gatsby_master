const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve('./src/templates/blog.js');

	return graphql(`
		{
			allMdx {
				nodes {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	`).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		const posts = result.data.allMdx.nodes;

		// create page for each mdx file
		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1];
			const next = index === 0 ? null : posts[index - 1];
			createPage({
				path: `blog` + post.fields.slug,
				component: blogPostTemplate,
				context: {
					slug: post.fields.slug,
					previous,
					next,
				},
			});
		});
		console.log(posts);

		// Create blog-list pages
		const postsPerPage = 2;
		const numPages = Math.ceil(posts.length / postsPerPage);
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog` : `/blog/${i + 1}`,
				component: path.resolve('./src/templates/blog-list.js'),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
