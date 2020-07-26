import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';
import styled from "styled-components"

const HeaderSectionWrapper = styled.section`
  margin: 10px auto;
  max-width: 1030px;
  padding: 0 20px;
`;

const HeaderSection = () => {
  return(
    <HeaderSectionWrapper>
        <Image />
    </HeaderSectionWrapper>
  )
}

export default HeaderSection
