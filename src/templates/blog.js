import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image";
import Layout from "../layout/layout"
import styled from "styled-components"
import { colors } from '../shared/constants';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useContentfulImage } from "../hooks";
import MainTitle from '../components/mainTitle';
import PostDate from '../components/postDate';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      date(formatString: "dddd, DD MMMM YYYY", locale: "pl")
      title
      content {
        json
      }
    }
  }
`

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const Article = styled.article`
  color: ${colors.textPrimary};
  text-align: justify;
`

const IMG = styled(Image)`
  margin: 30px 0;
  max-width: 100%;
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields?.title['en-US'];
      const fluid = useContentfulImage(node.data.target.sys.contentful_id);

      return <IMG alt={alt} fluid={fluid} />
    }
  }
}

const BlogPost = (props) => {
  return (
    <Layout>
        <PostHeader>
          <MainTitle>{props.data.contentfulBlogPost.title}</MainTitle>
          <PostDate date={props.data.contentfulBlogPost.date} />
        </PostHeader>
        <Article>
           {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        </Article>
    </Layout>
  )
}

export default BlogPost
