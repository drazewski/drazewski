const path = require('path');

// Called when a new node is created. 
// Plugins wishing to extend or transform nodes created by other plugins should implement this API.
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// Tell plugins to add pages. 
// This extension point is called only after the initial sourcing and transformation of nodes plus creation of 
// the GraphQL schema are complete so you can query your data in order to create pages.
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
}