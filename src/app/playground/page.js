'use client';
import Image from 'next/image';
import { LogoText, SubLogoText, Heading1, Heading2 } from '@/components/shared/Typography/Headings';
import { Paragraph, SubParagraph, SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import { PrimaryButton, SecondaryButton } from '@/components/shared/Typography/Buttons';
import { NavbarLink } from '@/components/shared/Typography/Links';
import Navbar from '@/components/Marginals/navbar/navbar';
import { Footer } from '@/components/Footer/Footer';
import Hero from '@/components/Hero Section/Hero';

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div style={styles.mainContainer}>
        <Heading1>ABOUT US</Heading1>
        <Heading2>SubHeading</Heading2>

        <Paragraph>
          HackNITR 5.0 is a hackathon to encourage you to use your imagination and invention to
          develop cutting-edge technology-based solutions to challenges in the real world. It was
          put together by a large group of tech enthusiasts from Google Developer Student Club
          (GDSC)
        </Paragraph>
        <SubParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptas optio, aliquam
          molestiae iure fuga animi beatae dolore magni odio. Odio eius vel vitae aut in quia.
          Maiores, sit nobis.
        </SubParagraph>
        <SmallParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae impedit quidem qui nihil
          sunt aspernatur eligendi? Dolorum, sequi, ratione impedit animi laboriosam quod
          doloremque, ipsam quia voluptas qui perspiciatis earum.
        </SmallParagraph>

        <div style={styles.con2}>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>
            {/* <Image
              src='https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png'
              alt=''
              // style={{ width: '20px', height: '20px' }}
              width={20}
              height={20}
              className='invert'
            /> */}
          </SecondaryButton>
        </div>

        <div style={styles.con2}>
          {/* important use $isActive or any other custom props with a $ before for styled-components */}
          <NavbarLink $isActive={true}>Link 1</NavbarLink>
          <NavbarLink>Link 2</NavbarLink>
          <NavbarLink>Link 3</NavbarLink>
          <NavbarLink>Link 4</NavbarLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  con2: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    width: 'full',
    height: 'full',
    gap: '10px',
    margin: '20px 0',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: 'full',
    height: 'full',
  },
};

export default Page;
