import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"
import HeaderSection from "../components/headerSection"
import Footer from "../components/footer"
import Main from "../components/main"
import './layout.css';
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 1030px;
`

const PostsLayout = ({ postTitle, children }) => (
  <>
    <Header/>
    <HeaderSection />
    <Grid>
      <Main>
        {children}
      </Main>
    </Grid>
    <Footer />
  </>
)

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
