import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PagesLayout from "../layout/PagesLayout";
import MainTitle from "../components/MainTitle";
import { sizes } from "../shared/breakpoints";

const Flex = styled.div`
  display: flex;
  flex-flow: column-reverse;
  
  @media(min-width: ${sizes.sm}) {
    flex-flow: row;
  }
`;

const IMG = styled.img`
  max-width: 70%;
  margin: auto;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 2;
  padding: 40px 20px;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 40px 20px;
  text-align: center;
`;

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: {title: {eq: "personal-photo"}}) {
        nodes {
          fluid {
            srcSet
          }
        }
      }

      contentfulPages(slug: {eq: "o-mnie"}) {
        pageContent {
          raw
        }
        pageTitle
      }
    }
  `);

  return (
    <PagesLayout>
        <MainTitle>{query.contentfulPages.pageTitle}</MainTitle>
        <Flex>
          <ImageWrapper>
            <IMG srcSet={query.allContentfulAsset.nodes[0].fluid.srcSet} />
          </ImageWrapper>
          <TextWrapper>
            {documentToReactComponents(JSON.parse(query.contentfulPages.pageContent.raw))}
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
};

export default AboutPage;
