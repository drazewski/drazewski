/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import PostsLayout from "../layout/PostsLayout";
import styled from "styled-components";
import { colors } from "../shared/constants";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useContentfulImage } from "../hooks";
import MainTitle from "../components/MainTitle";
import PostDate from "../components/PostDate";
import { sizes } from "../shared/breakpoints";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      date(formatString: "MMM DD, YYYY", locale: "en")
      title
      content {
        raw
        references {
        ... on ContentfulScripts {
          contentful_id
          __typename
          scriptTag {
            scriptTag
          }
          htmlTag {
            htmlTag
          }
        }
        ... on ContentfulAsset {
          contentful_id
          __typename
          id
        }
        ... on ContentfulCodeBlock {
            contentful_id
            __typename
            description
            language
            code {
              code
            }
          }
        }
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
    margin: 40px auto 35px;
    border: 0;
    background: linear-gradient(77deg, rgb(200, 5, 241), rgba(132, 179, 249, 0.93), rgba(203, 224, 255, 0));
    height: 2px;
    width: 55%;
  }

  pre.javascript {
    padding: 4px 10px;
    border: 1px solid #aaa;
    background: #fbf5ef;
    font-size: 10px;
    line-height: 1.25em;
    margin-bottom: 30px;
    white-space: break-spaces;

    @media(min-width: ${sizes.sm}) {
      font-size: 12px;
    }

    @media(min-width: ${sizes.md}) {
      font-size: 14px;
    }
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
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(node.data.target.sys.id);

      return <IMG fluid={fluid} />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { __typename } = node.data.target;
  
      switch (__typename) {
        case "ContentfulCodeBlock":
          return (
            <pre className={`prettyprint lang-js ${node.data.target.language}`}>
              <code>{node.data.target.code.code}</code>
            </pre>
          );
        case "ContentfulScripts":
          return (
            <div dangerouslySetInnerHTML={{ __html: node.data.target.htmlTag.htmlTag }} />
          );
        default:
          return null;
      }
    },

  }
};

const BlogPost = (props) => {
  const { content } = props.data.contentfulBlogPosts;

  useEffect(() => {
    const scriptTag = content?.references?.find(ref => ref.scriptTag);

    if (scriptTag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptTag.scriptTag.scriptTag;
      
      document.body.appendChild(script);
    }
  }, []);

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
        {renderRichText(content, options)}
      </Article>
    </PostsLayout>
  );
};

export default BlogPost;
