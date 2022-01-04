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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const PostTitle = styled.h2`
  font-size: 30px;
  margin: 0;
  color: #000;
  line-height: 1.25;
`;

const Tag = styled.span`
  color: ${colors.lightBlue};
  font-size: 14px;
  font-family: 'Open sans';
  padding: 2px 16px 4px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #84b3f9ed;
  transition: 0.4s all;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 0.3s;

    &:hover {
      opacity: 0.5;
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
  border: 1px solid #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 6px 6px 1px #ccc;

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
  border-radius: 5px;
  transition: 0.4s all;

  @media(min-width: ${sizes.sm}) {
    margin: 5px 0 10px 20px;
    width: 200px;
  }

  &:hover {
    opacity: 0.7
  }
`;

const Excerpt = styled.div`
  padding-top: 4px;
  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
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

const PaginationText = styled(Link)`
  font: 13px Lora;
  padding: 0 5px;
`;

const PaginationArrow = styled(FontAwesomeIcon)`
  font-size: 12px;
  padding-top: 2px;
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
          tagi
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
                  : <p>
                    {
                      post.node.content.raw.content.find((node) => node.nodeType === "paragraph").content[0].value
                    }
                  </p>
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
              <ArticleFooter>
                <span>
                  {post.node?.tagi?.length > 0 && post.node.tagi.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </span>
                <span data-disqus-identifier={post.node.slug} />
                <Link to={`/blog/${post.node.slug}#disqus_thread`}>
                  {/* <span data-disqus-identifier={post.node.slug} /> */}
                </Link>
              </ArticleFooter>
            </Article>
          </ArticleListItem>
        </ol>
      ))}
      {numPages > 1 &&
        <Pagination>
          {currentPage !== 1 && (
            <>
            <PaginationArrow icon={faChevronLeft} />
            <PaginationText to={currentPage === 2 ? "/" : `/strona/${currentPage - 1}`}>previous</PaginationText>
            </>
          )}
          {pageArray.map(element => (
            element !== currentPage ? (
            <PaginationLink to={element === 1 ? "/" : `/strona/${element}`} key={element}>{element}</PaginationLink>
            ) : (
            <PaginationItem key={element}>{element}</PaginationItem>
            )
          ))}
          {currentPage !== pageArray.length && (
            <>
            <PaginationText to={`/strona/${currentPage + 1}`}>next</PaginationText>
            <PaginationArrow icon={faChevronRight} />
            </>
          )}
        </Pagination>
      }
    </Layout>
  );
};

export default BlogPage;
