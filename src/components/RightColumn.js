import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import SidebarTitle from "./SidebarTitle";
import FeaturedPost from "./FeaturedPost";

const Aside = styled.aside`
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 0 auto;
  padding: 30px 0;
  width: calc(100% - 60px);
`;

const IMG = styled.img`
  margin: 0px auto 10px;
  display: flex;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: right;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0 20px 0;
  text-align: justify;
`;

const WidgetArea = styled.div`
  padding-bottom: 30px;
`;

const RightColumn = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulBlogPosts(filter: {featured: {eq: true}}) {
        edges {
          node {
            date(formatString: "MMM DD, YYYY", locale: "en")
            slug
            title
            content {
              raw
            }
            featuredImage {
              fixed(width: 300) {
                src
              }
            }
          }
        }
      }

      allContentfulExternalLinks(sort: {order: DESC, fields: date}, limit: 100) {
        edges {
          node {
            author
            title
            url
            featuredImage {
              fixed(width: 300) {
                src
              }
            }
          }
        }
      }

      contentfulElements(title: {eq: "about-me"}) {
        content {
          content
        }
      }

      allContentfulAsset(filter: {title: {eq: "personal-photo"}}) {
        nodes {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  return (
    <Aside>
      <WidgetArea>
        <SidebarTitle title="Here I Am" />
        <IMG srcSet={query.allContentfulAsset.nodes[0].fluid.srcSet} />
        <Text>
          {query.contentfulElements.content.content}
        </Text>
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Random posts" />
        {query.allContentfulBlogPosts.edges.map((post) => (
          <FeaturedPost
            key={post.node.slug}
            title={post.node.title}
            imageUrl={post.node.featuredImage.fixed.src}
            link={`/blog/${post.node.slug}`}
            subtitle={post.node.date}
          />
        ))}
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Recommended" />
        <Text>
          A list of articles that I find particularly interesting or practical.
        </Text>
        {query.allContentfulExternalLinks.edges.map((post) => (
          <FeaturedPost
            key={post.node.title}
            title={post.node.title}
            imageUrl={post.node.featuredImage.fixed.src}
            link={post.node.url}
            subtitle={post.node.author}
          />
        ))}
      </WidgetArea>
    </Aside>
  );
};

export default RightColumn;
