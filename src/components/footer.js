import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterComponent = styled.footer`
  color: #fefefe;
  background: #111;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const Footer = ({ siteTitle }) => {
  return(
    <FooterComponent>
      <Wrapper>
        <span>© {new Date().getFullYear()}</span>
        <span>Page created with <a href="https://www.gatsbyjs.org/">Gatsby.js</a></span>
      </Wrapper>
    </FooterComponent>
  )
}

export default Footer
