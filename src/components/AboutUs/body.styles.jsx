import tw, { styled } from 'twin.macro';
import { Heading1 } from '../shared/Typography/Headings';
import { Paragraph } from '../shared/Typography/Paragraphs';

export const MainContainer = styled.div`
  ${tw`relative pt-32 pb-32 overflow-hidden -mt-32 flex flex-col items-center z-10 justify-center p-5 h-[150vh] lg:h-[230vh]`}
`;

export const BackgroundDiv = styled.div`
  ${tw`absolute -z-10 -top-52 mt-44 h-auto w-full overflow-hidden pb-44 `}
`;

export const CircleDiv = styled.div`
  ${tw`border border-[#070c23] drop-shadow-2xl rounded-full h-[100vw] w-screen mt-32`}
  background-image: linear-gradient(to bottom, rgba(197, 208, 255, 0.4) 0%, rgba(35, 70, 101, 0.7) 20% , rgba(21, 42, 126, 0.3) 50%, rgba(21, 42, 126, 0) 100%);
  box-shadow:
    inset 0 0 30px 30px rgba(11, 19, 42, 1),
    0 0 50px 50px rgba(11, 19, 70, 0.5);
`;

export const Section = styled.section`
  ${tw`h-screen`}
`;

export const SectionWithBgImage = styled(Section)`
  ${tw`relative z-10 top-52 lg:-top-80 lg:-top-32`}
`;

export const AboutUsHeading = styled(Heading1)`
  ${tw`mx-auto mt-0 lg:mt-44`}
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
  box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.4);
`;

export const Paragraph1 = styled(Paragraph)`
  ${tw`mx-16 mt-32 text-sm md:text-lg lg:text-2xl leading-6 lg:leading-9`}
`;
