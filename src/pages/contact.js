import React from "react";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PagesLayout from "../layout/PagesLayout";
import MainTitle from "../components/MainTitle";

const Flex = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 40px 20px;
  text-align: center;
`;

const ContactPage = () => {
  const query = useStaticQuery(graphql`
    {
      contentfulPages(slug: {eq: "kontakt"}) {
        pageContent {
          raw
        }
        pageTitle
      }
      placeholderImage: file(relativePath: { eq: "mountains.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1900
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(query.placeholderImage);

  return (
    <PagesLayout bgImage={image}>
        <MainTitle>{query.contentfulPages.pageTitle}</MainTitle>
        <Flex>
          <TextWrapper>
            {documentToReactComponents(JSON.parse(query.contentfulPages.pageContent.raw))}
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
};

export default ContactPage;
