'use client';
import React from 'react';
import { NavbarLink } from '@/components/shared/Typography/Links';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar/Nav';

const Playground = () => {
  return (
    <div>
      <NavBar />
      <Link href={'/typography'}>
        <NavbarLink isActive={true}>Checkout Typography</NavbarLink>
      </Link>
      <br />
      Playground
    </div>
  );
};

export default Playground;
