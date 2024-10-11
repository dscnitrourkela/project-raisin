import styled from 'styled-components';
import tw from 'twin.macro';
import { SmallParagraph } from '@/components/shared/Typography/Paragraphs';
import { Heading1 } from '@/components/shared/Typography/Headings';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

export const EventsCardContainer = styled.div`
  ${tw`max-w-7xl max-h-[394px] flex items-center justify-start gap-16 pt-11 pb-11 pl-12 mb-32`}
  background: transparent;
`;

export const ImageWrapper = styled.div`
  ${tw`w-[567px] h-[400px] px-3 py-3 pb-[13px] rounded-[22.41px] justify-center items-center inline-flex`}
`;

export const ImageParentContainer = styled.div`
  ${tw`grow shrink basis-0 self-stretch rounded-3xl flex-col justify-start items-start border-[1px] p-0.5 pt-2 pb-2`}
  box-shadow:
    0px 2px 5px 0px #ffe3697a,
    0px 0px 0.83px 3.322px #ffffff1a,
    0px -3.322px 1.661px 0px #00000040 inset,
    0px 1px 0.83px 0px #ffffff40 inset;
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.bgimage});
  ${tw`w-[542.84px] h-[348.72px] rounded-3xl bg-cover bg-center mt-1`}
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
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
  box-shadow:
    0px 0px 0px 0px #ffe3697a,
    0px 0px 0px 0px #ffffff1a,
    0px 0px 0px 0px #00000040 inset,
    0px 0px 0px 0px #ffffff40 inset;

  ${tw`text-black text-xl font-normal font-share_tech py-4 px-8`} /* Increased font size and padding */

  &:hover {
    box-shadow: 0 0 10px 2px #ff3c7f;
    border-color: #ffffff;
    background-color: #ffffff33;
  }
`;

export const RuleBookButton = styled(PrimaryButton)`
  background: transparent;
  box-shadow:
    0px 0px 0px 0px #ffe3697a,
    0px 0px 0px 0px #ffffff1a,
    0px 0px 0px 0px #00000040 inset,
    0px 0px 0px 0px #ffffff40 inset;

  ${tw`text-white text-xl font-normal font-share_tech border-[1px] border-[#ffffff66] py-4 px-8`} /* Increased font size and padding */

  &:hover {
    box-shadow: 0 0 10px 2px #ffffff66;
    border-color: #ffffff;
  }
`;

export const EventsPageHeading = styled(Heading1)`
  ${tw`text-center text-[64px] pt-20 pb-24`}
`;
