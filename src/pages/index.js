import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { colors } from "../shared/constants";
import Layout from "../layout/Layout";
import PostDate from "../components/PostDate";
import Parallax from "../shared/parallax";
import { sizes } from "../shared/breakpoints";

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const PostTitle = styled.h2`
  font-size: 26px;
  margin: 0;
  color: #000;
  line-height: 1.25;
`;

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
  width: max-content;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  color: inherit;
  transition: 0.3s;
  margin: 0px auto 10px;
  position: relative;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(77deg,#c805f1,#84b3f9ed, #cbe0ff00);
    }

    &:hover {
      opacity: 0.75;
    }

  @media(min-width: ${sizes.sm}) {
    transform: translateY(-10px);
  }
`;

const ArticleListItem = styled.li`
  display: flex;
  flex-direction: row;
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
`;

const Flex = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  @media(min-width: ${sizes.sm}) {
    flex-direction: row;
  }

`;

const IMG = styled(Image)`
  margin: -10px 0 10px;
  max-width: 100%;

  @media(min-width: ${sizes.sm}) {
    margin: 5px 0 30px 20px;
    width: 200px;
  }
`;

const Excerpt = styled.div`
& p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
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

    setPageArray(pages);

    const parallax = new Parallax();

    parallax.setVars();
  }, []);

  return (
    <Layout>
      {props.data.allContentfulBlogPosts.edges.length && props.data.allContentfulBlogPosts.edges.map((post) => (
        <ol key={post.node.slug}>
          <ArticleListItem>
            <Article>
              <PostHeader>
                <PostTitle isHome><StyledLink to={`/blog/${post.node.slug}`}>{post.node.title}</StyledLink></PostTitle>
                <PostDate date={post.node.date} />
              </PostHeader>
              <Flex>
                <Excerpt>
                {post.node.excerpt?.excerpt
                  ? <p>{post.node.excerpt.excerpt}</p>
                  : <p>{post.node.content.raw.content.find((node) => node.nodeType === "paragraph").content[0].value}</p>
                }
                </Excerpt>
                <Link to={`/blog/${post.node.slug}`}>
                  <IMG 
                    fluid={post.node.featuredImage.fluid} 
                    key={post.node.featuredImage.fluid.src}
                    alt={post.node.featuredImage.title}
                  />
                </Link>
              </Flex>
              <ReadMoreLink to={`/blog/${post.node.slug}`}>Read more...</ReadMoreLink>
            </Article>
          </ArticleListItem>
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
};

export default BlogPage;
