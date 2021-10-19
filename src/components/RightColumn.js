import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import SidebarTitle from "./SidebarTitle";
import FeaturedPost from "./FeaturedPost";
import { sizes } from "../shared/breakpoints";

const Aside = styled.aside`
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 30px auto;
  width: calc(100% - 60px);

  @media(min-width: ${sizes.sm}) {
    border-left: 1px solid #ddd;
    padding-left : 30px;
  }
`;

const IMG = styled.img`
  max-width: 70%;
  margin: auto;
  display: flex;
  padding-bottom: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0 20px 0;
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

      allContentfulExternalLinks(sort: {order: DESC, fields: date}, limit: 5) {
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
        <SidebarTitle title="My Instagram" />
          <div className="taggbox-container" style={{width:"100%", height:"2000px", overflow: "auto"}}>
            <div className="taggbox-socialwall" data-wall-id="73302" view-url="https://widget.taggbox.com/73302"></div>
          </div>
      </WidgetArea>
    </Aside>
  );
};

export default RightColumn;
