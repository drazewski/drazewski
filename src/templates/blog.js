import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import PostsLayout from "../layout/PostsLayout";
import styled from "styled-components";
import { colors } from "../shared/constants";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentfulImage } from "../hooks";
import MainTitle from "../components/MainTitle";
import PostDate from "../components/PostDate";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      date(formatString: "MMM DD, YYYY", locale: "en")
      title
      content {
        raw
      }
      featuredImage { 
        fluid {
          srcSet
        }
      }
    }
  }
`;

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Article = styled.article`
  color: ${colors.textPrimary};
  text-align: justify;

  a {
    font-weight: 600;
  }

  b {
    color: #000;
  }

  h1,h2,h3,h4,h5,h6 {
    text-align: left;
  }

  hr {
    margin: 40px 0 35px;
    border: solid;
    border-width: 1px;
    border-bottom: 0;
    border-color: #aaa;
  }
`;

const IMG = styled(Image)`
  margin: 30px 0;
  max-width: 100%;
  max-height: 75vh;

  & img {
    object-fit: contain !important;
  }
`;

const options = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fluid = useContentfulImage(node.data.target.sys.id);

      return <IMG fluid={fluid} />;
    }
  }
};

const BlogPost = (props) => {
  return (
    <PostsLayout
      postTitle={props.data.contentfulBlogPosts.title}
      imageData={props.data.contentfulBlogPosts.featuredImage}
    >
      <PostHeader>
        <MainTitle>{props.data.contentfulBlogPosts.title}</MainTitle>
        <PostDate date={props.data.contentfulBlogPosts.date} />
      </PostHeader>
      <Article>
        {documentToReactComponents(JSON.parse(props.data.contentfulBlogPosts.content.raw), options)}
      </Article>
    </PostsLayout>
  );
};

export default BlogPost;
