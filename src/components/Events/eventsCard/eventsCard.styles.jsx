import styled from 'styled-components';
import tw from 'twin.macro';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const baseButtonStyles = tw`text-xl font-normal font-share_tech py-4 px-8`;
export const baseBoxShadow = `
  0px 0px 0px 0px #ffe3697a,
  0px 0px 0px 0px #ffffff1a,
  0px 0px 0px 0px #00000040 inset,
  0px 0px 0px 0px #ffffff40 inset
`;

export const EventsCardContainer = styled.div`
  ${tw`max-w-7xl max-h-[394px] flex items-center justify-start gap-16 pt-11 pb-11 pl-12 pr-10 mb-32`}
  background: transparent;
`;

export const ImageWrapper = styled.div`
  ${tw`w-[567px] h-[400px] px-3 py-3 rounded-[22.41px] justify-center items-center`}
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.bgimage});
  ${tw`w-[543px] h-[378px] rounded-3xl bg-cover bg-center`}
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;

export const ContentAndButtonWrapper = styled.div`
  ${tw`flex flex-col gap-y-14 max-w-3xl max-h-[375px] justify-center items-start`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col justify-center items-start gap-y-5`}
  margin: 0;
  position: relative;
  top: -30px;
  padding: 0;
`;

export const EventHeading = styled(Heading1)`
  ${tw`font-orbitron text-[#e0e5ed] font-bold text-left m-0 p-5 pl-0 pt-0`}
  text-shadow: 0 0 1px #e0e5ed, 0 0 3px #e0e5ed, 0 0 3px #e0e5ed;
`;

export const EventDescription = styled(SmallParagraph)`
  ${tw`max-w-2xl [overflow-wrap: break-word;] text-start text-[#e0e5ed]/75 leading-snug text-base m-0`}
`;

export const ButtonContainer = styled.div`
  ${tw`flex flex-row gap-x-16`}
`;

export const RegisterButton = styled(PrimaryButton)`
  ${baseButtonStyles}
  ${tw`text-black`}
  box-shadow: ${baseBoxShadow};

  &:hover {
    box-shadow: 0 0 10px 2px #ff3c7f;
    border-color: #ffffff33;
    background-color: #ffffff33;
  }
`;

export const RuleBookButton = styled(PrimaryButton)`
  ${baseButtonStyles}
  ${tw`text-white border-[1px] border-[#ffffff66]`}
  background: transparent;
  box-shadow: ${baseBoxShadow};

  &:hover {
    box-shadow: 0 0 10px 2px #ffffff66;
    border-color: #ffffff;
  }
`;

export const EventsPageHeading = styled(Heading1)`
  ${tw`text-center text-[64px] pt-40 pb-24`}
`;
