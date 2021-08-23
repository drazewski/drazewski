import React from "react"
import Image from "gatsby-image";
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

      contentfulPages(slug: {eq: "o-mnie"}) {
        pageContent {
          raw
        }
      }
    }
  `);

  const document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Hello world!',
            marks: [],
            data: {}
          },
        ],
      },
    ],
  };

  return (
    <PagesLayout>
        <MainTitle>Mam na imię Ania</MainTitle>
        <Flex>
          <ImageWrapper>
            <IMG fluid={query.file.childImageSharp.fluid} />
          </ImageWrapper>
          <TextWrapper>
            {documentToReactComponents(JSON.parse(query.contentfulPages.pageContent.raw))}
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
}

export default AboutPage
