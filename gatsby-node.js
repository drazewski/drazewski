const path = require('path');

// Tell plugins to add pages. 
// This extension point is called only after the initial sourcing and transformation of nodes plus creation of 
// the GraphQL schema are complete so you can query your data in order to create pages.
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
        query {
            allContentfulBlogPosts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const posts = res.data.allContentfulBlogPosts.edges;
    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/strona/${i + 1}`,
            component: path.resolve("./src/pages/index.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    res.data.allContentfulBlogPosts.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
}