import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./layout.css";
import styled from "styled-components";
import SEO from "../components/Seo";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 1030px;
`;

const Image = styled.img`
  max-height: calc(66vh - 48px);
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const PostsLayout = ({ imageData, children }) => {

  return(
    <>
      <SEO />
      <Header/>
      <Image
        srcSet={imageData.fluid.srcSet}
      />
      <Grid>
        <Main>
          {children}
        </Main>
      </Grid>
      <Footer />
    </>
  );
};

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsLayout;
