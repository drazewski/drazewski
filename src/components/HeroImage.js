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
  min-height: 50vh;
`;

const HeroImage = () => {
  const [heroHeight, setHeroHeight] = useState("calc(100vh)");

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sea.png" }) {
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
      setHeroHeight("69vh");
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
      <HeroImageTitle />
    </HeroImageWrapper>
  );
};

export default HeroImage;
