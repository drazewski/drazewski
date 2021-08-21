import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from '../shared/constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareUp, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'

const FooterComponent = styled.footer`
  color: ${colors.textSecondary};
  background: ${colors.backgroundPrimary};
  font-family: 'Open sans';
  font-size: 13px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin: 0 auto;
  max-width: 990px;
  padding: 0 20px;
`;

const Uppercase = styled.span`
  text-transform: uppercase;
  padding-right: 10px;
`;

const Footer = ({ siteTitle }) => {
  return(
    <FooterComponent>
      <Wrapper>
        <span>All rights reserved © {new Date().getFullYear()}</span>
        <span>
          <Uppercase>Go up</Uppercase>
          <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </span>
      </Wrapper>
    </FooterComponent>
  )
}

export default Footer
