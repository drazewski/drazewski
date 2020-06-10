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
`;

const StyledLink = styled(Link)`
  color: ${colors.textSecondary};
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 10px 4px 10px;
  transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
`;

const Footer = ({ siteTitle }) => {
  return(
    <FooterComponent>
      <Wrapper>
        <span>Wszystkie prawa zastrzeżone © {new Date().getFullYear()}</span>
        <Uppercase>Na górę<Link href="">
          <StyledLink>
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
          </StyledLink>
        </Link></Uppercase>
      </Wrapper>
    </FooterComponent>
  )
}

export default Footer
