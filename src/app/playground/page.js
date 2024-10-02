'use client';
import { LogoText, SubLogoText, Heading1, Heading2 } from '@/components/shared/Typography/Headings';
import { Paragraph, SubParagraph, SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import { PrimaryButton, SecondaryButton } from '@/components/shared/Typography/Buttons';
import { NavbarLink } from '@/components/shared/Typography/Links';
import { NavBar } from '@/components/NavBar/Nav';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <NavBar />
      <div className='relative z-10' style={styles.mainContainer}>
        <div className='absolute -z-10 h-full w-full top-[50vh] overflow-hidden flex mx-auto pt-20'>
          <div
            style={{
              background:
                'linear-gradient(to bottom, linear-gradient(to bottom, #C5D0FF 0%, #C5D0FF 4%, #152A7E 100%)',
              backgroundBlendMode: 'darken',
              boxShadow:
                'inset 0 0 30px 30px rgba(11, 19, 42, 1), 0 0 50px 50px rgba(11, 19, 70, 0.5)',
            }}
            className='border border-[#070c23] drop-shadow-2xl rounded-full w-full h-full '
          ></div>
        </div>
        <section className='h-screen'>
          <LogoText>innovision</LogoText>
          <SubLogoText>24</SubLogoText>
        </section>
        <section className='h-screen relative z-10 '>
          <div className='absolute -z-10 w-full h-full -top-44'>
            <Image
              className='mx-auto'
              src='/static/images/about_bg.png'
              height={1200}
              width={1200}
              alt='Galaxy Background'
            />
          </div>
          <h1
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backgroundBlendMode: 'darken',
              boxShadow: '0px 0px 30px 30px rgba(0, 0, 0, 0.4)',
            }}
            className='text-2xl md:text-3xl rounded-xl lg:text-5xl font-orbitron my-28 mx-10 font-semibold text-center text-[#00FFD1]  py-16 '
          >
            ABOUT US
          </h1>
          {/* <h2 className='text-base md:text-lg lg:text-xl font-orbitron mb-3 font-medium text-white'>
            SubHeading
          </h2> */}

          <Paragraph className='mx-16'>
            HackNITR 5.0 is a hackathon to encourage you to use your imagination and invention to
            develop cutting-edge technology-based solutions to challenges in the real world. It was
            put together by a large group of tech enthusiasts from Google Developer Student Club
            (GDSC)
          </Paragraph>
          {/* <SubParagraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptas optio,
            aliquam molestiae iure fuga animi beatae dolore magni odio. Odio eius vel vitae aut in
            quia. Maiores, sit nobis.
          </SubParagraph>
          <SmallParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae impedit quidem qui
            nihil sunt aspernatur eligendi? Dolorum, sequi, ratione impedit animi laboriosam quod
            doloremque, ipsam quia voluptas qui perspiciatis earum.
          </SmallParagraph> */}
        </section>
        {/* <div style={styles.con2}>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>
            <img
              src='https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png'
              alt=''
              style={{ width: '20px', height: '20px' }}
              className='invert'
            />
          </SecondaryButton>
        </div>

        <div style={styles.con2}>
          <NavbarLink $isActive={true}>Link 1</NavbarLink>
          <NavbarLink>Link 2</NavbarLink>
          <NavbarLink>Link 3</NavbarLink>
          <NavbarLink>Link 4</NavbarLink>
        </div> */}
      </div>
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
    backgroundColor: '#070c23',
    backgroundImage: 'url(/static/images/noise&texture.png)',
    backgroundRepeat: 'repeat',
  },
};

export default Page;
