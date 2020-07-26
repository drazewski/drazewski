import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderImage from './headerImage';
import styled from "styled-components"

const HeaderSectionWrapper = styled.section`
  height: calc(50vh - 48px);
  margin: 0 0 20px 0;
  overflow: hidden;
  padding: 0;
`;

const HeaderSection = () => {
  return(
    <HeaderSectionWrapper>
      <HeaderImage />
    </HeaderSectionWrapper>
  )
}

export default HeaderSection
