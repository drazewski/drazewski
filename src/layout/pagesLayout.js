import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./layout.css";
import styled from "styled-components";
import SEO from "../components/Seo";

const Grid = styled.div`
  margin: 20px auto 0;
  max-width: 1030px;
`;

const PagesLayout = ({ children }) => (
  <>
    <SEO />
    <Header/>
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
};

export default PagesLayout;
