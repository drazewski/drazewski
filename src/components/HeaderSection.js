import React from "react";
import HeaderImage from "./HeaderImage";
import styled from "styled-components";

const HeaderSectionWrapper = styled.section`
  height: calc(50vh - 48px);
  margin: 0 0 20px 0;
  overflow: hidden;
  padding: 0;
  position: relative;
`;

const BlogTitle = styled.h1`
  position: absolute;
  color: white;
  top: 0;
`;

const HeaderSection = () => {
  return(
    <HeaderSectionWrapper>
      <HeaderImage />
      <BlogTitle>Lukasz Drazewski</BlogTitle>
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;
