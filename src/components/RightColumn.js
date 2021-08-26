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
  max-width: 70%;
  margin: auto;
  display: flex;
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
          }
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

  return(
    <Aside>
      <WidgetArea>
        <SidebarTitle title="Here I Am" />
        <IMG srcSet={query.allContentfulAsset.nodes[0].fluid.srcSet} />
        <Text>
          Hi!   
        </Text>
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Random posts" />
        {query.allContentfulBlogPosts.edges.map((post) => <FeaturedPost key={post.node.slug} post={post} />)}
      </WidgetArea>  
      <WidgetArea>
        <SidebarTitle title="Recommended" />
        <Text>
        Here you will find interesting articles on various topics that I have read recently.
        </Text>
      </WidgetArea>
    </Aside>
  );
};

export default RightColumn;
