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
        <div className='absolute -z-10 h-full w-full overflow-hidden flex mx-auto pt-20'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(197, 208, 255, 0.6) 0%, rgba(197, 208, 255, 0.4) 4%, rgba(21, 42, 126, 0.3) 50%,rgba(21, 42, 126, 0) 100%)',
              boxShadow:
                'inset 0 0 30px 30px rgba(11, 19, 42, 1), 0 0 50px 50px rgba(11, 19, 70, 0.5)',
            }}
            className='border border-[#070c23] drop-shadow-2xl rounded-full w-full h-full mt-64 '
          ></div>
        </div>
        <section className='h-screen'>
          <LogoText>innovision</LogoText>
          <SubLogoText>24</SubLogoText>
        </section>
        <section className='h-screen relative z-10 mb-52'>
          <div className='absolute -z-10 w-full h-full -top-44'>
            <Image
              className='mx-auto'
              src='/static/images/about_bg.png'
              height={1200}
              width={1200}
              alt='Galaxy Background'
            />
          </div>
          <Heading1
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backgroundBlendMode: 'darken',
              boxShadow: '0px 0px 30px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            ABOUT US
          </Heading1>
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
    height: '100%',
    backgroundColor: '#070c23',
    backgroundImage: 'url(/static/images/noise&texture.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
  },
};

export default Page;
