import React from "react";
import styled from "styled-components";
import { sizes } from "../shared/breakpoints";

const MainWrapper = styled.main`
  margin: 0 0 50px 0;
  padding: 0px 30px 15px 15px;
  @media(min-width: ${sizes.sm}) {
    margin: 30px 0 50px 0;
    min-height: calc(100vh - 100px);
  }
`;

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

export default Main;
