import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            excerpt
            html
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return(
    <Layout>
      <h1>My personal blog</h1>
      <p>later add posts!</p>
      {posts?.allMarkdownRemark?.edges?.length && posts.allMarkdownRemark.edges.map((post) => (
        <ol key={post.node.id}>
          <h3><Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h3>
          <p>{post.node.frontmatter.date}</p>
          <div>{post.node.excerpt}</div>
        </ol>
      ))}
    </Layout>
  );
}

export default BlogPage
