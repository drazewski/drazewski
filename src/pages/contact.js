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

const TextWrapper = styled.div`
  flex: 3;
  padding: 40px 20px;
  text-align: center;
`

const ContactPage = () => {
  const query = useStaticQuery(graphql`
    {
      contentfulPages(slug: {eq: "kontakt"}) {
        pageContent {
          raw
        }
      }
    }
  `);

  return (
    <PagesLayout>
        <MainTitle>Kontakt ze mną</MainTitle>
        <Flex>
          <TextWrapper>
            {documentToReactComponents(JSON.parse(query.contentfulPages.pageContent.raw))}
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
}

export default ContactPage
