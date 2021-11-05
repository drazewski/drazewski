import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./layout.css";
import styled from "styled-components";
import SEO from "../components/Seo";

const Div = styled(GatsbyImage)`
  z-index: -1;
  width: 100%;
  position: absolute !important;
  height: 100%;
  min-height: calc(100vh + 32px);
`;

const Grid = styled.div`
  margin: 48px auto 0;
  padding-top: 32px;
  max-width: 1030px;
  min-height: calc(100vh - 48px);
`;

const PagesLayout = ({ bgImage, children }) => (
  <>
    <SEO />
    <Header/>
    {bgImage && <Div image={bgImage} />}
    <Grid>
      <Main>
        {children}
      </Main>
    </Grid>
    <Footer />
  </>
);

PagesLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bgImage: PropTypes.string,
};

export default PagesLayout;
