import tw, { styled } from 'twin.macro';
import { Heading1 } from '../shared/Typography/Headings';
import { Paragraph } from '../shared/Typography/Paragraphs';

export const MainContainer = styled.div`
  ${tw`relative flex flex-col items-center z-10 justify-center p-5 h-[130vh] md:h-[180vh] lg:h-[230vh] -mt-20`}
`;

export const BackgroundDiv = styled.div`
  ${tw`absolute -z-10 h-auto w-full overflow-hidden -top-20`}
`;

export const CircleDiv = styled.div`
  ${tw`border border-[#070c23] drop-shadow-2xl rounded-full h-[100vw] w-screen my-32`}
  background-image: linear-gradient(to bottom, rgba(197, 208, 255, 0.4) 0%, rgba(35, 70, 101, 0.7) 20% , rgba(21, 42, 126, 0.3) 50%, rgba(21, 42, 126, 0) 100%);
  box-shadow:
    inset 0 0 30px 30px rgba(11, 19, 42, 1),
    0 0 50px 50px rgba(11, 19, 70, 0.5);
`;

export const Section = styled.section`
  ${tw``}
`;

export const SectionWithBgImage = styled(Section)`
  ${tw`content-center -mt-20`}
`;

export const AboutHeading = styled(Heading1)`
  ${tw`my-0 py-16 lg:py-20 md:my-10 lg:my-32`}
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.4);
`;

export const AboutSection = styled(Section)`
  ${tw`h-fit py-5 lg:py-10 `}
  background-image: url('/static/images/about_bg.png');
  background-size: 550px 350px;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    background-size: 900px 600px;
  }
`;

export const Paragraph1 = styled(Paragraph)`
  ${tw`-mt-10 lg:mx-16 text-xs sm:text-sm md:text-lg lg:text-2xl leading-5 lg:leading-9`}
`;
