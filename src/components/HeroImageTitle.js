import React from "react";
import styled from "styled-components";
import { sizes } from "../shared/breakpoints";

const HeroImageTitleWrapper = styled.div`
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

const HeroImageTitle = () => {
  return (
    <HeroImageTitleWrapper>
      <Title>
        <Name>Łukasz Drążewski</Name>
        <Subname>personal blog</Subname>
      </Title> 
    </HeroImageTitleWrapper>
  );
};

export default HeroImageTitle;
