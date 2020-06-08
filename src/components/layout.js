/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import RightColumn from "./rightColumn"
import './layout.css';
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  margin: auto;
  max-width: 1030px;
`

const Layout = ({ children }) => (
  <>
    <Header/>
    <Grid>
      <Main>
        {children}
      </Main>
      <RightColumn />
    </Grid>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
