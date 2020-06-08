import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { colors } from '../shared/constants';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        title
      }
      html
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

  & .gatsby-resp-image-wrapper {
    margin: 30px 0;
  }
`

const BlogPost = (props) => {
  return (
    <Layout>
        <PostHeader>
          <Title>{props.data.markdownRemark.frontmatter.title}</Title>
          <Date>{props.data.markdownRemark.frontmatter.date}</Date>
        </PostHeader>
        <Article>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </Article>
    </Layout>
  )
}

export default BlogPost
