import React from "react"
import styled from "styled-components"
import { colors } from '../shared/constants';

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: ${colors.headingsPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;

const MainTitle = ({ children }) => (
  <Title>
    {children}
  </Title>
);

export default MainTitle;