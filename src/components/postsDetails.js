import React from "react"
import Image from "gatsby-image";
import styled from "styled-components"
import { graphql } from "gatsby"
import SidebarTitle from './sidebarTitle'

const Aside = styled.aside`
  min-height: calc(100vh - 210px);
  max-width: 1030px;
  margin: 0 auto;
  padding: 30px 0;
  width: calc(100% - 60px);
`;

const IMG = styled(Image)`
  max-width: 100%;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 20px 0;
`;

const WidgetArea = styled.div`
  padding-bottom: 30px;
`

const PostsDetails = (props) => {
  return(
    <Aside>
      <WidgetArea>
        {props.postTitle}
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Etykieta" />
      </WidgetArea>
      <WidgetArea>
        <SidebarTitle title="Oceny" />
      </WidgetArea>
    </Aside>
  )
}

export default PostsDetails
