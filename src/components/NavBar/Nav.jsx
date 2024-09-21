import React from 'react';
import { NavContainer, NavItem } from './styles';
import { NavData } from '@/config/content/NavData';
import { NavbarLink } from '@/components/shared/Typography/Links';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <NavContainer>
      {NavData.map((item, index) => (
        <NavItem key={index}>
          <a href={item.path}>{item.text}</a>
        </NavItem>
      ))}
      <Link href={'/typography'}>
        <NavbarLink $isActive={true}>Typography</NavbarLink>
      </Link>
    </NavContainer>
  );
};
