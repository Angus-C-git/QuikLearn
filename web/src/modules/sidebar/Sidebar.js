import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarContent';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import PageLogo from '../../static/homeLogo.png';


const Nav = styled.div`
  background: #1F1D2B;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #1F1D2B;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
 
  transition: 350ms;
  
`;


const SidebarRule = styled.hr`
    color: #34373C;
    width: 80%;
`;


const SidebarTitle = styled.div`
    color: #FFFFFF;
    margin-left: 20px;
`;

const SidebarTitleImg = styled.img`
    height: 10%;
    width: 10%;
    padding-right: 4px;
`;


const SidebarSectionHeader = styled.h5`
    color: #808191;
    margin-left: 20px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <SidebarTitle>
                    <h3><SidebarTitleImg src={PageLogo} /> QuikLearn</h3>
            </SidebarTitle>
            <SidebarSectionHeader>MENU</SidebarSectionHeader>
            {SidebarData.map((item, index) => {
                if (index === 5)
                    return (
                        <>
                            <SidebarRule />
                            <SidebarSectionHeader>SUBJECTS</SidebarSectionHeader>
                            <SubMenu item={item} key={index} />
                        </>
                    );
                else
                    return <SubMenu item={item} key={index} />;
            })}
            <SidebarRule />
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;