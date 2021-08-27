import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Main from "../components/Main";
import RightColumn from "../components/RightColumn";
import "./layout.css";
import styled from "styled-components";
import { sizes } from "../shared/breakpoints";
import SEO from "../components/Seo";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 1030px;

  @media(min-width: ${sizes.sm}) {
    grid-template-columns: 70% 1fr;
  }
`;

const Layout = ({ children }) => (
  <>
    <SEO />
    <Header />
    <HeroImage />
    <Grid>
      <Main>
        {children}
      </Main>
      <RightColumn />
    </Grid>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
