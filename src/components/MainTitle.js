import React from "react";
import styled from "styled-components";
import { colors } from "../shared/constants";

const Title = styled.h2`
  font-size: ${props => props.isHome ? "30px" : "40px"};
  font-weight: 300;
  color: ${colors.headingsPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: ${props => props.isHome ? "4px 0 15px" : "15px 0"};
`;

const MainTitle = ({ children, isHome }) => (
  <Title isHome={isHome}>
    {children}
  </Title>
);

export default MainTitle;