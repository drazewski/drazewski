import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image";
import Layout from "../layout/layout"
import styled from "styled-components"
import { colors } from '../shared/constants';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useContentfulImage from "../hooks/useContentfulImage";

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

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: ${colors.headingsPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`

const Date = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textLight};
  font: 12px Lora;
`
const Article = styled.article`
  font-size: 17px;
  color: ${colors.textPrimary};
  text-align: justify;
  line-height: 1.75;
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
          <Title>{props.data.contentfulBlogPost.title}</Title>
          <Date>{props.data.contentfulBlogPost.date}</Date>
        </PostHeader>
        <Article>
          {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        </Article>
    </Layout>
  )
}

export default BlogPost
