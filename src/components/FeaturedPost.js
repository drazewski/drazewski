import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../shared/constants";
import { sizes } from "../shared/breakpoints";

const PostItem = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const PostItemTitle = styled.h4`
  color: ${colors.headingsPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 6px;

  @media(min-width: ${sizes.sm}) {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media(min-width: ${sizes.md}) {
    -webkit-line-clamp: 3;
  }
`;

const PostItemSubtitle = styled.span`
  color: ${colors.textLight};
  text-transform: uppercase;
  font-size: 13px;
  font-family: 'Open sans';
  font-style: italic;

  @media(min-width: ${sizes.sm}) {
    font-size: 11px;
  }
`;

const Thumbnail = styled.img`
  flex: 2;
  margin: 10px 0px;
  width: 60px;
  min-height: 60px;
  max-width: 140px;
`;

const Meta = styled.div`
  flex: 3;
  margin: 5px 0 10px 10px;
`;

const FeaturedPost = ({ title, imageUrl, link, subtitle }) => {
  return (
    <PostItem>
      <Thumbnail
        alt={title}
        src={imageUrl}
      />
      <Meta>
        <PostItemTitle>
          <Link to={link}>{title}</Link>
        </PostItemTitle>
        <PostItemSubtitle>{subtitle}</PostItemSubtitle>
      </Meta>
    </PostItem>
  );
};

FeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default FeaturedPost;