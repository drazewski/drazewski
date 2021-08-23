import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SidebarTitle from './sidebarTitle'
import FeaturedPost from './featuredPost'

const Aside = styled.aside`
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 0 auto;
  padding: 30px 0;
  width: calc(100% - 60px);
`;

const IMG = styled.img`
  max-width: 100%;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 20px 0;
`;

const WidgetArea = styled.div`
  padding-bottom: 30px;
`

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
    </Aside>
  )
}

export default RightColumn
