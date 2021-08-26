import React from "react";
import styled from "styled-components";

const BorderedWrapper = styled.div`
  padding-top: 30px;
  border-top: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-top: -40px;
  margin-bottom: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TitleText = styled.span`
  display: inline-block;
  padding: 0 20px;
  background-color: #fff;
`;

const SidebarTitle = ({ title }) => (
  <BorderedWrapper>
    <Title>
      <TitleText>{title}</TitleText>
    </Title>
  </BorderedWrapper>
);

export default SidebarTitle;
