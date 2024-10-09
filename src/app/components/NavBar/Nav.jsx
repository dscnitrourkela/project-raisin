import React from 'react';
import { NavContainer, NavItem } from './styles';
import { NavData } from '@/app/config/content/NavData';

export const NavBar = () => {
  return (
    <NavContainer>
      {NavData.map((item, index) => (
        <NavItem key={index}>
          <a href={item.path}>{item.text}</a>
        </NavItem>
      ))}
    </NavContainer>
  );
};
