import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../shared/constants";
import { sizes } from "../shared/breakpoints";
import { socialIconItems } from "../shared/menuItems";

const HeaderComponent = styled.header`
  width: 100%;
  background: #fff;
  height: 48px;
  box-shadow: 0 1px 9px rgb(0 0 0 / 32%);
  z-index: 10;
  position: fixed;
  top: 0;
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

const Header = () => {
  return(
    <HeaderComponent>
      <Wrapper>
        <Menu>
          <MenuList>
          <MenuItem>
              <StyledLink to="/">
                {"Blog"}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/about">
                {"About me"}
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contact">
                {"Contact"}
              </StyledLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <Social>
          {socialIconItems.map(item => {
            return(
              <StyledOuterLink href={item.href} key={item.href}>
                <FontAwesomeIcon icon={item.icon} />
              </StyledOuterLink>
            );
          })}
        </Social>
      </Wrapper>
    </HeaderComponent>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
