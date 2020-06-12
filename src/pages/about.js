import React from "react"
import Image from "gatsby-image";
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import PagesLayout from "../layout/pagesLayout"
import MainTitle from '../components/mainTitle';

const Flex = styled.div`
  display: flex;
`

const IMG = styled(Image)`
  margin: auto;
  max-width: 250px;
`;

const ImageWrapper = styled.div`
  flex: 2;
  padding: 40px 20px;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 40px 20px;
  text-align: center;
`

const AboutPage = () => {
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

      allContentfulPages(filter: {slug: {eq: "about"}}) {
        edges {
          node {
            pageContent {
              json
            }
          }
        }
      }
    }
  `);

  return (
    <PagesLayout>
        <MainTitle>Mam na imię Ania</MainTitle>
        <Flex>
          <ImageWrapper>
            <IMG fluid={query.file.childImageSharp.fluid} />
          </ImageWrapper>
          <TextWrapper>
          <pre>{JSON.stringify(query.allContentfulPages.edges.node.pageContent.json, null, 4)}</pre>
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
}

export default AboutPage
