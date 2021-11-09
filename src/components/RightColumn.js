import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarTitle from "./SidebarTitle";
import FeaturedPost from "./FeaturedPost";
import { getAllMyAnswers } from "../services/stackService";
import StackItem from "./StackItem";
import { colors } from "../shared/constants";

const LIMIT_ANSWERS = 8;

const Aside = styled.aside`
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 0 auto;
  padding: 30px 0;
  width: calc(100% - 60px);
`;

const IMG = styled.img`
  margin: 0px auto 10px;
  display: flex;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: right;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0 20px 0;
  text-align: justify;
`;

const MoreLink = styled.span`
& a {
  color: #555;
}
`;

const WidgetArea = styled.div`
  padding-bottom: 30px;
`;

const Flex = styled.li`
  align-items: baseline;
  display: flex;

  & svg {
    color: ${colors.lightBlue};
    transform: translateY(3px);
    width: 1em;
  }
`;

const RightColumn = () => {
  const query = useStaticQuery(graphql`
    {
      allContentfulBlogPosts(filter: {featured: {eq: true}}) {
        edges {
          node {
            date(formatString: "MMM DD, YYYY", locale: "en")
            slug
            title
            content {
              raw
            }
            featuredImage {
              fixed(width: 300) {
                src
              }
            }
          }
        }
      }

      allContentfulExternalLinks(sort: {order: DESC, fields: date}, limit: 100) {
        edges {
          node {
            author
            title
            url
            featuredImage {
              fixed(width: 300) {
                src
              }
            }
          }
        }
      }

      contentfulElements(title: {eq: "about-me"}) {
        content {
          content
        }
      }

      allContentfulAsset(filter: {title: {eq: "personal-photo"}}) {
        nodes {
          fluid {
            srcSet
          }
        }
      }
    }
  `);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let mounted = false;

    getAllMyAnswers(LIMIT_ANSWERS).then(data => {
      if (!mounted) setAnswers(data);
    });

    return () => mounted = true;
  }, []);

  return (
    <Aside>
      <WidgetArea>
        <SidebarTitle title="Here I Am" />
        <IMG srcSet={query.allContentfulAsset.nodes[0].fluid.srcSet} />
        <Text>
          {query.contentfulElements.content.content}
          {" "}
          <MoreLink>{"More about me "}<Link to="/about">read  here...</Link></MoreLink>
        </Text>
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Random posts" />
        <ul>
        {query.allContentfulBlogPosts.edges.map((post) => (
          <Flex key={post.node.slug}>
            <FontAwesomeIcon icon={faChevronRight} />
            <FeaturedPost
              title={post.node.title}
              link={`/blog/${post.node.slug}`}
              subtitle={post.node.date}
            />
          </Flex>
        ))}
        </ul>
      </WidgetArea>
      {answers?.items?.length > 0 && (
      <WidgetArea>
        <SidebarTitle title="My Stack Activity" />
        {[...answers.items].sort((a,b) => b.creation_date - a.creation_date).map((item) => (
          <StackItem
            key={item.answer_id}
            score={item.score}
            isAccepted={item.is_accepted}
            id={item.question_id}
            link={item.link}
            title={item.title}
          />
        ))}
      </WidgetArea>
      )}
    </Aside>
  );
};

export default RightColumn;
