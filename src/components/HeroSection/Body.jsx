import Image from 'next/image';
import { LogoText, SubLogoText } from '../shared/Typography/Headings';
// import { Paragraph } from '../shared/Typography/Paragraphs';
import {
  AboutUsHeading,
  BackgroundDiv,
  CircleDiv,
  MainContainer,
  Paragraph1,
  Section,
  SectionWithBgImage,
} from './body.styles';
import { HeroImage } from './Image';

export const Body = () => {
  return (
    <>
      <MainContainer>
        <BackgroundDiv>
          <CircleDiv />
        </BackgroundDiv>
        <Section>
          <LogoText>innovision</LogoText>
          <SubLogoText>24</SubLogoText>
        </Section>
        <SectionWithBgImage>
          <HeroImage />
          <AboutUsHeading>ABOUT US</AboutUsHeading>
          <Paragraph1>
            HackNITR 5.0 is a hackathon to encourage you to use your imagination and invention to
            develop cutting-edge technology-based solutions to challenges in the real world. It was
            put together by a large group of tech enthusiasts from Google Developer Student Club
            (GDSC)
          </Paragraph1>
        </SectionWithBgImage>
      </MainContainer>
    </>
  );
};
