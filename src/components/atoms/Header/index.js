import React from 'react';
import styled from 'styled-components';

import bellIcon from '../../../assets/images/bell.svg';
import logoIcon from '../../../assets/images/header_icon.svg';
import burgerIcon from '../../../assets/images/burger.svg';
import avatarIcon from '../../../assets/images/avatar.png';
import settingsIcon from '../../../assets/images/settings.svg';
import tenancyArrowIcon from '../../../assets/images/small-right.svg';

const navigations = [
  {
    title: 'Dashboards'
  }
];

export const Header = () => {
  const renderNavigation = (item, index) => (
   <NavigationItem key={`navigation-${index}`}>
     {item.title}
   </NavigationItem>
  );

  return (
   <Wrapper>
     <LeftPart>
       <LogoIcon src={logoIcon} />
       <BurgerIcon src={burgerIcon} />
       <TenancySelect>
         Cube 3
         <TenancyArrowIcon src={tenancyArrowIcon} />
       </TenancySelect>
     </LeftPart>
     <CenterPart>
       {navigations.map(renderNavigation)}
     </CenterPart>
     <RightPart>
       <SearchInput>
         Search
       </SearchInput>
       <Icon src={settingsIcon} />
       <Icon src={bellIcon} />
       <AvatarIcon src={avatarIcon} />
       <Button>Action</Button>
     </RightPart>
   </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 48px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #232222;
`;

const LeftPart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const CenterPart = styled.div`
  flex: 2.5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightPart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoIcon = styled.img`
  width: auto;
  height: 100%;
`;

const BurgerIcon = styled.img`
  width: auto;
  height: 100%;
  margin: 0 30px;
  cursor: pointer;
`;

const TenancySelect = styled.div`
  width: 140px;
  height: 28px;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  background-color: #444343;

  color: #FBF8F3;
  font-size: 16px;
  font-style: normal;
  font-family: Config Condensed;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.03em;
`;

const TenancyArrowIcon = styled.img`
  width: auto;
  height: 80%;
  cursor: pointer;
`;

const NavigationItem = styled.div`
  width: 99px;
  height: 24px;
  display: flex;
  padding: 2px 12px;
  background: rgba(255, 255, 255, 0.15);
  align-items: center;
  border-radius: 6px;
  flex-direction: row;

  color: #FFFFFF;
  font-size: 17px;
  font-family: Config Condensed;
  line-height: 20px;
  letter-spacing: 0.03em;
`;

const Icon = styled.img`
  width: auto;
  height: 80%;
  cursor: pointer;
  padding: 0 10px;
`;

const AvatarIcon = styled.img`
  width: auto;
  height: 80%;
  cursor: pointer;
  padding: 0 10px;
`;

const Button = styled.div`
  width: 81px;
  height: 24px;
  margin: 0 10px;
  display: flex;
  padding: 7px 11px;
  background: #44A5FF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  align-items: center;
  border-radius: 4px;
  justify-content: center;

  color: #FFFFFF;
  font-size: 14px;
  font-family: Config Condensed;
  line-height: 16px;
  letter-spacing: 0.03em;
`;

const SearchInput = styled.div`
  width: 250px;
  height: 28px;
  border: 0.5px solid #DDE2E4;
  display: flex;
  padding: 5px 10px;
  background: #FBF8F3;
  align-items: center;
  margin-right: 10px;
  border-radius: 4px;

  color: #374151;
  font-size: 14px;
  line-height: 20px;
  font-family: Config Condensed;
  letter-spacing: 0.03em;
`;
