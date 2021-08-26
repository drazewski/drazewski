import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { sizes } from "../shared/breakpoints";

const ExportedImage = styled(GatsbyImage)`
  margin: auto;
`;

const HeroImageWrapper = styled.section`
  margin: 0 0 20px 0;
  overflow: hidden;
  padding: 0;
  position: relative;
`;

const ImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 16px -20px 40px 0px #777 inset;
  top: 0;
  left: 0;  
`;

const TitleWrapper = styled.div`
  max-width: 1030px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`;

const Title = styled.div`
  position: absolute;
  bottom: 0px;
  color: white;
  left: 15px;
`;

const Name = styled.h1`
  font-family: 'Charmonman', cursive;
  font-size: 20px;
  border-bottom: 1px solid;
  margin-bottom: 15px;
  padding-bottom: 12px;
  font-weight: 300;

  @media(min-width: ${sizes.sm}) {
    font-size: 30px;
  }
`;

const Subname = styled.h5`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 10px 0;

  @media(min-width: ${sizes.sm}) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "grapes.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1600
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.placeholderImage);

  return (
    <HeroImageWrapper>
      <ExportedImage
        image={image}
        imgStyle={{transform: "scaleX(-1)"}}
        style={{maxHeight: "calc(100vh - 48px)"}}
      />
      <ImageShadow />
      <TitleWrapper>
        <Title>
          <Name>Łukasz Drążewski</Name>
          <Subname>personal blog</Subname>
        </Title> 
      </TitleWrapper>
    </HeroImageWrapper>
  );
};

export default HeroImage;
