import React from "react";
import styled from "styled-components";
import { sizes } from "../shared/breakpoints";

const HeroImageTitleWrapper = styled.div`
  max-width: 1030px;
  width: 100%;
  position: absolute;
  bottom: 5%;
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
  font-size: 22px;
  margin-bottom: 1px;
  padding-bottom: 12px;
  font-weight: 300;

  @media(min-width: ${sizes.sm}) {
    font-size: 30px;
  }
`;

const Border = styled.div`
  height: 2px;
  background: linear-gradient(77deg,#c805f1,#84b3f9ed, #cbe0ff00);
`;


const Subname = styled.h5`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 10px 0;

  @media(min-width: ${sizes.sm}) {
    margin: 15px 0;
  }
`;

const HeroImageTitle = () => {
  return (
    <HeroImageTitleWrapper>
      <Title>
        <Name>Lukasz Drazewski</Name>
        <Border />
        <Subname>personal blog</Subname>
      </Title> 
    </HeroImageTitleWrapper>
  );
};

export default HeroImageTitle;
