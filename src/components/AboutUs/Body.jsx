import Image from 'next/image';
import { LogoText, SubLogoText } from '../shared/Typography/Headings';
// import { Paragraph } from '../shared/Typography/Paragraphs';
import {
  AboutUsHeading,
  BackgroundDiv,
  CircleDiv,
  MainContainer,
  Paragraph1,
  SectionWithBgImage,
} from './body.styles';
import { HeroImage } from './Image';
import { aboutUsData } from '../../config/content/AboutUs/AboutUs';

export const Body = () => {
  return (
    <>
      <MainContainer>
        <BackgroundDiv>
          <CircleDiv />
        </BackgroundDiv>
        <SectionWithBgImage>
          <HeroImage />
          <AboutUsHeading>ABOUT US</AboutUsHeading>
          <Paragraph1>{aboutUsData}</Paragraph1>
        </SectionWithBgImage>
      </MainContainer>
    </>
  );
};
