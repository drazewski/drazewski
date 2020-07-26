import React from "react"
import Image from "gatsby-image";
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

const IMG = styled(Image)`
  max-width: 100%;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

const WidgetArea = styled.div`
  padding-bottom: 30px;
`

const RightColumn = () => {
  const query = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "personal-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }

      allContentfulBlogPost(filter: {featured: {eq: true}}, sort: {order: ASC, fields: date}) {
        edges {
          node {
            date(formatString: "DD MMM YYYY", locale: "pl")
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
console.log(query.allContentfulBlogPost.edges)
  return(
    <Aside>
      <WidgetArea>
        <SidebarTitle title="To ja" />
        <IMG fluid={query.file.childImageSharp.fluid} />
        <Text>Cześć, nazywam się Ania Drązewska a to jest mój blog o karmieniu piersią. Bardzo lubię karmić piersią i mam duże cycki. </Text>
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Często czytane" />
        {query.allContentfulBlogPost.edges.map((post) => <FeaturedPost key={post.node.slug} post={post} />)}
      </WidgetArea>
    </Aside>
  )
}

export default RightColumn
