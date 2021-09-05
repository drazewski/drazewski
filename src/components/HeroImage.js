import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import HeroImageTitle from "./HeroImageTitle";

const ExportedImage = styled(GatsbyImage)`
  margin: auto;
  position: unset !important;
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

const HeroImage = () => {
  const [heroHeight, setHeroHeight] = useState("calc(100vh - 48px)");

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

  useEffect(() => {
    const isNextTimeVisited = localStorage.getItem("nextTimeVisited");

    if (isNextTimeVisited) {
      setHeroHeight("50vh");
    } else {
     localStorage.setItem("nextTimeVisited", 1);
    }
  },[]);

  const image = getImage(data.placeholderImage);

  return (
    <HeroImageWrapper style={{maxHeight: heroHeight}}>
      <ExportedImage
        image={image}
        alt="Łukasz Drążewski Personal Blog"
      />
      <ImageShadow />
      <HeroImageTitle />
    </HeroImageWrapper>
  );
};

export default HeroImage;
