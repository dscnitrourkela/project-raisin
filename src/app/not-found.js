'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Container, Heading, Message } from '@/components/NotFound/notfound.styles';

export default function NotFound() {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>The page you are looking for does not exist.</Message>
      <Link href='/'>
        <Button>Go Home</Button>
      </Link>
    </Container>
  );
}
