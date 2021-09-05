import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image";
import styled from "styled-components"
import { colors } from "../shared/constants";
import Layout from "../layout/Layout"
import MainTitle from "../components/MainTitle";
import PostDate from "../components/PostDate";

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
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  color: inherit;
  transition: 0.3s;
  margin-top: 10px;

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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled(Link)`
  padding: 0 8px;
`;

const PaginationItem = styled.span`
  color: ${colors.textLight};
  padding: 0 8px;
`;

export const posts = graphql`
  query posts($limit: Int, $skip: Int) {
    allContentfulBlogPosts(limit: $limit, sort: {order: DESC, fields: date}, skip: $skip) {
      edges {
        node {
          date(formatString: "MMM DD, YYYY", locale: "en")
          featuredImage { 
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid
            }
          }
          slug
          title
          excerpt {
            excerpt
          }
          content {
            raw
          }
        }
      }
    }
  }
`;

const BlogPage = (props) => {
  const [pageArray, setPageArray] = useState([]);
  const { currentPage, numPages } = props.pageContext;

  useEffect(() => {
    const pages = [];

    for (let i=1; i<=numPages; i++) {
      pages.push(i);
    }

    setPageArray(pages)
  }, []);

  return (
    <Layout>
      {props.data.allContentfulBlogPosts.edges.length && props.data.allContentfulBlogPosts.edges.map((post) => (
        <ol key={post.node.slug}>
          <PostHeader>
            <MainTitle isHome><StyledLink to={`/blog/${post.node.slug}`}>{post.node.title}</StyledLink></MainTitle>
            <PostDate date={post.node.date} />
          </PostHeader>
          <Article>
            <Link to={`/blog/${post.node.slug}`}>
              <IMG 
                fluid={props.data.allContentfulBlogPosts.edges[0].node.featuredImage.fluid} 
                key={props.data.allContentfulBlogPosts.edges[0].node.featuredImage.fluid.src}
                alt={props.data.allContentfulBlogPosts.edges[0].node.featuredImage.title}
              />
            </Link>
            {post.node.excerpt?.excerpt
              ? post.node.excerpt.excerpt
              : <p>{post.node.content.raw.content.find((node) => node.nodeType === "paragraph").content[0].value}</p>
            }
            <ReadMoreLink to={`/blog/${post.node.slug}`}>Read more...</ReadMoreLink>
          </Article>
        </ol>
      ))}
      {numPages > 1 &&
        <Pagination>
          {pageArray.map(element => (
            element !== currentPage ? (
            <PaginationLink to={element === 1 ? "/" : `/strona/${element}`} key={element}>{element}</PaginationLink>
            ) : (
            <PaginationItem key={element}>{element}</PaginationItem>
            )
          ))}
        </Pagination>
      }
    </Layout>
  );
}

export default BlogPage
