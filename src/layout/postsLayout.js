import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./layout.css";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 1030px;
`;

const PostsLayout = ({ postTitle, children }) => (
  <>
    <Header/>
    <HeroImage />
    <Grid>
      <Main>
        {children}
      </Main>
    </Grid>
    <Footer />
  </>
);

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsLayout;
