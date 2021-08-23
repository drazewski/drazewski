import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image";
import PostsLayout from "../layout/postsLayout"
import styled from "styled-components"
import { colors } from '../shared/constants';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useContentfulImage } from "../hooks";
import MainTitle from '../components/mainTitle';
import PostDate from '../components/postDate';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      date(formatString: "MMM DD, YYYY", locale: "en")
      title
      content {
        raw
      }
    }
  }
`

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Article = styled.article`
  color: ${colors.textPrimary};
  text-align: justify;
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
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields?.title['en-US'];
      const fluid = useContentfulImage(node.data.target.sys.contentful_id);

      return <IMG alt={alt} fluid={fluid} />
    }
  }
}

const BlogPost = (props) => {
  return (
    <PostsLayout
      postTitle={props.data.contentfulBlogPosts.title}
    >
        <PostHeader>
          <MainTitle>{props.data.contentfulBlogPosts.title}</MainTitle>
          <PostDate date={props.data.contentfulBlogPosts.date} />
        </PostHeader>
        <Article>
           {documentToReactComponents(JSON.parse(props.data.contentfulBlogPosts.content.raw), options)}
        </Article>
    </PostsLayout>
  )
}

export default BlogPost
