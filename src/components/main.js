import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main`
  min-height: calc(100vh - 100px);
  margin-right: 30px;
`;

const Main = ({ children }) => {
  return(
    <MainWrapper>
        {children}
    </MainWrapper>
  )
}

export default Main
