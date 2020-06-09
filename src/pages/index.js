import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { colors } from '../shared/constants';
import Layout from "../layout/layout"

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: ${colors.headingsPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`

const Date = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textLight};
  font: 12px Lora;
`
const Article = styled.article`
  font-size: 17px;
  color: ${colors.textPrimary};
  margin-bottom: 100px;
  text-align: justify;
  line-height: 1.75;

  & .gatsby-resp-image-wrapper {
    margin: 30px 0;
  }
`

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 10, sort: {order: ASC, fields: date}) {
        edges {
          node {
            date(formatString: "dddd, DD MMMM YYYY", locale: "pl")
            slug
            title
            content {
              json
            }
          }
        }
      }
    }
  `);

  return(
    <Layout>
      {posts.allContentfulBlogPost?.edges.length && posts.allContentfulBlogPost.edges.map((post) => (
        <ol key={post.node.slug}>
          <PostHeader>
            <Title><StyledLink to={`/blog/${post.node.slug}`}>{post.node.title}</StyledLink></Title>
            <Date>{post.node.date}</Date>
          </PostHeader>
          <Article>
            <div>{post.node.content.json.content.find((node) => node.nodeType === "paragraph").content[0].value}</div>
          </Article>
        </ol>
      ))}
    </Layout>
  );
}

export default BlogPage
