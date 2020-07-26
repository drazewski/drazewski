import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import styled from "styled-components"
import { useContentfulImage } from "../hooks";
import { colors } from '../shared/constants';

const PostItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const PostItemTitle = styled.h4`
  color: ${colors.headingsPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding-bottom: 7px;
`

const PostItemDate = styled.span`
  color: ${colors.textLight};
  text-transform: uppercase;
  font-size: 11px;
  font-family: 'Open sans';
  font-style: italic;
`

const Thumbnail = styled(Image)`
  flex: 2;
  margin: 10px 10px 10px 0;
  width: 150px;
  height: 100px;
`

const Meta = styled.div`
  flex: 3;
  margin: 10px 0 10px 10px;
`

const FeaturedPost = ({ post }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-image5.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PostItem>
      <Thumbnail
        alt={post.node.title}
        fluid={
          useContentfulImage(post.node.content.json.content.find(el => el.nodeType === "embedded-asset-block")?.data?.target.sys.contentful_id) ||
          data.placeholderImage.childImageSharp.fluid
        }
      />
      <Meta>
        <PostItemTitle>
          <Link to={`/blog/${post.node.slug}`} >{post.node.title}</Link>
        </PostItemTitle>
        <PostItemDate>{post.node.date}</PostItemDate>
      </Meta>
    </PostItem>
  );
}

export default FeaturedPost