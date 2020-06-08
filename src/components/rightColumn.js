import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Aside = styled.aside`
  padding: 1.45rem 1.0875rem;
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 0 auto;
`;

const RightColumn = ({ children }) => {
  return(
    <Aside>
        {children}
    </Aside>
  )
}

export default RightColumn
