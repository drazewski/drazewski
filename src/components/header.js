import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { colors } from '../shared/constants';

const HeaderComponent = styled.header`
  background: ${colors.backgroundPrimary};
  height: 48px;
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1030px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: ${colors.textSecondary};
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 15px 4px 0px;
  transition: 0.3s;

    &[aria-current="page"] {
      color: ${colors.headingsPrimary};
    }

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
  padding: 0 20px;
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
                {'Home'}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/about">
                {'O mnie'}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contact">
                {'Kontakt'}
              </StyledLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <Social>
          <StyledLink>
            <FontAwesomeIcon icon={faFacebookF} />
          </StyledLink>
          <StyledLink>
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledLink>
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
