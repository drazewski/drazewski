import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterContainer = styled.section`
  background-color: ${colors.pistachio};
  padding: 10px 0 60px;
  width: 100%;
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
  padding: 0 10px;

  & a {
    color: black;
    opacity: 0.3;
    transition: 0.5s all;

    &:hover {
      opacity: 1;
    }
  }
`;

const Icons = styled.div`
  margin: 30px 0;
`;

const SocialFooter = () => {
  return (
    <FooterContainer>
      <Flex className={utilStyles['container']}>
        <div>
          <Icons>
            <NavList>
              {footerIconsItems.map(item => (
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
  )
}

export default SocialFooter; 