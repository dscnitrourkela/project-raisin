'use client';
import React, { useState, useEffect } from 'react';
import {
  HamburgerContainer,
  MainBar,
  MainBarItems,
  MenuLogoItem,
  NavContainer,
  NavCover,
  ResItem,
  ResList,
  ResMen,
  HamburgerRegisterButton,
} from './navbar.styles';
import Hamburger from 'hamburger-react';
import { ButtonData, logos, navLinks } from '../../../config/content/NavbarData/NavData';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, [isOpen]);

  return (
    <NavContainer>
      <div>
        <NavCover>
          <MainBar>
            <MenuLogoItem>
              <Link href='/'>
                <Image src={logos[0].link} alt={logos[0].name} width='40' height='40' />
              </Link>
            </MenuLogoItem>
            {navLinks.map((navLink) => (
              <MainBarItems key={navLink.id}>
                <a href={`#${navLink.id}`}>{navLink.name}</a>
              </MainBarItems>
            ))}
          </MainBar>
          <HamburgerContainer>
            <Hamburger toggled={isOpen} toggle={handleToggle} size={20} />
          </HamburgerContainer>
        </NavCover>
      </div>

      {isOpen ? (
        <div className='h-[80vh] flex items-center justify-center'>
          <ResMen>
            <ResList>
              {navLinks.map((navLink) => (
                <ResItem key={navLink.id}>
                  <a href={`#${navLink.id}`}>{navLink.name}</a>
                </ResItem>
              ))}

              <HamburgerRegisterButton>
                <Link href={ButtonData.link}>{ButtonData.title}</Link>
              </HamburgerRegisterButton>
            </ResList>
          </ResMen>
        </div>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;
