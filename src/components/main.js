import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main`
  min-height: calc(100vh - 100px);
  margin: 0 15px 50px 0;
  padding: 15px;
`;

const Main = ({ children }) => {
  return(
    <MainWrapper>
        {children}
    </MainWrapper>
  )
}

export default Main
