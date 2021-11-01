import React, { useEffect, useState } from "react";
import { Disqus } from 'gatsby-plugin-disqus';
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "./layout.css";
import Parallax from "../shared/parallax";
import styled from "styled-components";
import SEO from "../components/Seo";
import HeroImageTitle from "../components/HeroImageTitle";


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 1030px;
`;

const Image = styled.img`
  max-height: 69vh;
  min-height: 50vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: object-position 0.1s ease-out;
`;

const ImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background: linear-gradient(0deg,#2222226b,rgb(203 224 255 / 0%));
  bottom: 2px;
  left: 0;  
`;

const DisqusWrapper = styled.div`
  padding: 0 30px 0 15px;
`;

const AnimationWrapper = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.6s;
`;

const PostsLayout = ({ imageData, children, postTitle, slug }) => {
  const [heroImageTitleVisible, setHeroImageTitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroImageTitleVisible(true), 2000);
    const parallax = new Parallax();

    parallax.setVars();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return(
    <>
      <SEO title={postTitle} />
      <Header/>
        <div style={{position: "relative"}} className="parallax">
          <Image
            srcSet={imageData.fluid.srcSet}
          />
          <ImageShadow />
          <AnimationWrapper isVisible={heroImageTitleVisible}>
            <HeroImageTitle />
          </AnimationWrapper>
        </div>
        <Grid>
          <Main>
            {children}
          </Main>
          <DisqusWrapper>
            <Disqus
              config={{
                url: process.env.PROD 
                  ? `https://drazewski.github.io/blog/${slug}` 
                  : `http://localhost:8000/blog/${slug}`,
                identifier: slug,
                title: postTitle,
              }}
            />
          </DisqusWrapper>
        </Grid>
      <Footer />
    </>
  );
};

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsLayout;
