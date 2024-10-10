'use client';
import Image from 'next/image';
import { LogoText, SubLogoText, Heading1, Heading2 } from '@/components/shared/Typography/Headings';
import { Paragraph, SubParagraph, SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import { PrimaryButton, SecondaryButton } from '@/components/shared/Typography/Buttons';
import { NavbarLink } from '@/components/shared/Typography/Links';
import Navbar from '@/components/Marginals/navbar/navbar';
import { Footer } from '@/components/Footer/Footer';
import Hero from '@/components/Hero Section/Hero';
import { AboutUsMain } from '@/components/AboutUsSection/Main';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsMain />
    </>
  );
};

export default Page;
