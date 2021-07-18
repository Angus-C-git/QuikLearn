import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  border: 1px solid #808191;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;


const SidebarIconCube = styled.span`
    border: 1px solid #353440;
    border-radius: 12px;
    padding: 10px;
    background-color: #353440;
    text-align: center;
`;


// TMP sadness
const SelectedSidebarIconCube = styled.span`
    border: 1px solid #FFCA00;
    border-radius: 12px;
    padding: 10px;
    background-color: #FFCA00;
    text-align: center;
`;


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.selected 
                ? <SelectedSidebarIconCube>{item.icon}</SelectedSidebarIconCube> 
                : <SidebarIconCube>{item.icon}</SidebarIconCube>
             }    
             
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;