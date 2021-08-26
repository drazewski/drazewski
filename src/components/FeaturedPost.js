import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { colors } from "../shared/constants";

const PostItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const PostItemTitle = styled.h4`
  color: ${colors.headingsPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding-bottom: 7px;
`;

const PostItemDate = styled.span`
  color: ${colors.textLight};
  text-transform: uppercase;
  font-size: 11px;
  font-family: 'Open sans';
  font-style: italic;
`;

const Thumbnail = styled.img`
  flex: 2;
  margin: 10px 10px 10px 0;
  width: 80px;
`;

const Meta = styled.div`
  flex: 3;
  margin: 5px 0 10px 10px;
`;

const FeaturedPost = ({ post }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "boat.jpg" }) {
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
        src={post.node.featuredImage.fixed.src}
      />
      <Meta>
        <PostItemTitle>
          <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
        </PostItemTitle>
        <PostItemDate>{post.node.date}</PostItemDate>
      </Meta>
    </PostItem>
  );
};

export default FeaturedPost;