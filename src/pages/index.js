import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from "styled-components"
import { colors } from '../shared/constants';
import Layout from "../layout/layout"
import { useContentfulImage } from "../hooks";
import MainTitle from '../components/mainTitle';
import PostDate from '../components/postDate';

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

const ReadMoreLink = styled(Link)`
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
  color: inherit;
  transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
`;

const Article = styled.article`
  font-size: 17px;
  color: ${colors.textPrimary};
  margin-bottom: 60px;
  text-align: justify;
  line-height: 1.75;

  & .gatsby-resp-image-wrapper {
    margin: 30px 0;
  }
`

const IMG = styled(Image)`
  margin: 30px 0;
  max-width: 100%;
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields?.title['en-US'];
      const fluid = useContentfulImage(node.data.target.sys.contentful_id);

      return <IMG alt={alt} fluid={fluid} />
    }
  }
}

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 5, sort: {order: DESC, fields: date}) {
        edges {
          node {
            date(formatString: "dddd, DD MMMM YYYY", locale: "pl")
            slug
            title
            excerpt {
              json
            }
            content {
              json
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      {posts.allContentfulBlogPost?.edges.length && posts.allContentfulBlogPost.edges.map((post) => (
        <ol key={post.node.slug}>
          <PostHeader>
            <MainTitle><StyledLink to={`/blog/${post.node.slug}`}>{post.node.title}</StyledLink></MainTitle>
            <PostDate date={post.node.date} />
          </PostHeader>
          <Article>
            {post.node.excerpt
              ? documentToReactComponents(post.node.excerpt?.json, options)
              : <p>{post.node.content.json.content.find((node) => node.nodeType === "paragraph").content[0].value}</p>
            }
            <ReadMoreLink to={`/blog/${post.node.slug}`}>Przeczytaj całość...</ReadMoreLink>
          </Article>
        </ol>
      ))}
    </Layout>
  );
}

export default BlogPage
