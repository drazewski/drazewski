import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PagesLayout from "../layout/pagesLayout"
import MainTitle from '../components/mainTitle';

const Flex = styled.div`
  display: flex;
`

const TextWrapper = styled.div`
  flex: 3;
  padding: 40px 20px;
`;

const ListItem = styled.li`
  padding-top: 20px;
`;

const ListTitle = styled.h3`
  text-decoration: underline;
`;

const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, next) => {
      return <ListItem><ListTitle>{next[0].props.children}</ListTitle></ListItem>
    }
  }
}

const FaqPage = () => {
  const query = useStaticQuery(graphql`
    {
      contentfulPages(slug: {eq: "faq"}) {
        pageContent {
          json
        }
      }
    }
  `);

  return (
    <PagesLayout>
        <MainTitle>Często zadawane pytania</MainTitle>
        <Flex>
          <TextWrapper>
            {documentToReactComponents(query.contentfulPages.pageContent.json, options)}
          </TextWrapper>
        </Flex>
    </PagesLayout>
  );
}

export default FaqPage
