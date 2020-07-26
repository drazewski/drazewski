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
  font-size: 14px;
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

      allContentfulWinePost(filter: {featured: {eq: true}}, sort: {order: ASC, fields: date}) {
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

  return(
    <Aside>
      <WidgetArea>
        <SidebarTitle title="To ja" />
        <IMG fluid={query.file.childImageSharp.fluid} />
        <Text>
          Cześć! Nazywam się Łukasz Drążewski. Witaj na moim blogu poświęconym winu. Znajdziesz tu opisy przede wszystkim win z popularnych sieci handlowych, ale także win mniej znanych i trudniej dostępnych. I choć osobiście preferuję wina białe, wytrawne i półwytrawne, to zdarza mi się od czasu do czasu pić wina czerwone. Za każdym razem jednak co zdegustuję to na blogu opisuję :)   
        </Text>
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Często czytane" />
        {query.allContentfulWinePost.edges.map((post) => <FeaturedPost key={post.node.slug} post={post} />)}
      </WidgetArea>
    </Aside>
  )
}

export default RightColumn
