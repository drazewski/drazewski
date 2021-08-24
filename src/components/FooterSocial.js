import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";
import { socialIconItems } from "../shared/menuItems";
import { sizes } from "../shared/breakpoints";

const FooterContainer = styled.section`
  padding: 10px 0;
  width: 100%;

  @media(min-width: ${sizes.sm}) {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const NavListIconItem = styled.li`
  display: inline;
  font-size: 16px;
  padding: 0 10px;

  & a {
    color: black;
    opacity: 0.5;
    transition: 0.5s all;

    &:hover {
      opacity: 1;
    }
  }
`;

const Icons = styled.div`
  margin: 30px 0;
`;

const FooterSocial = () => {
  return (
    <FooterContainer>
      <Flex>
        <div>
          <Icons>
            <NavList>
              {socialIconItems.map(item => (
                <NavListIconItem key={item.href}>
                  <a href={item.href}>
                    <FontAwesomeIcon
                      icon={item.icon}
                    />
                  </a>
                </NavListIconItem>
              ))}
            </NavList>
          </Icons>
        </div>
      </Flex>
    </FooterContainer>
  );
};

export default FooterSocial; 