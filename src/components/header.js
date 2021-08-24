import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { colors } from '../shared/constants';
import { sizes } from "../styles/breakpoints"

const HeaderComponent = styled.header`
  background: ${colors.backgroundPrimary};
  height: 48px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 990px;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  color: ${colors.textSecondary};
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 5px 4px 0px;
  transition: 0.3s;

  @media(min-width: ${sizes.sm}) {
    letter-spacing: 2px;
    padding: 0 25px 4px 0px;
  }

    &[aria-current="page"] {
      color: ${colors.headingsPrimary};
    }

    &:hover {
      opacity: 0.5;
    }
`;

const StyledOuterLink = styled.a`
  color: ${colors.textSecondary};
  padding: 0 15px 4px 0px;
  transition: 0.3s;
  cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
`;

const Menu = styled.nav`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
`;

const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 10px 0 0px;
  padding: 0;
`;

const Social = styled.div`
  color: ${colors.textPrimary};
  font-size: 14px !important;
  display: none;

  @media(min-width: ${sizes.sm}) {
    display: block;
  }
`;

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);

  return(
    <HeaderComponent>
      <Wrapper>
        <Menu>
          <MenuList>
          <MenuItem>
              <StyledLink to="/">
                {'Blog'}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/about">
                {'About me'}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contact">
                {'Contact'}
              </StyledLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <Social>
          <StyledOuterLink>
            <FontAwesomeIcon icon={faFacebookF} />
          </StyledOuterLink>
          <StyledOuterLink>
            <FontAwesomeIcon icon={faInstagram} />
          </StyledOuterLink>
          <StyledOuterLink>
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledOuterLink>
        </Social>
      </Wrapper>
    </HeaderComponent>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
