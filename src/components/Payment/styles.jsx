import styled from 'styled-components';
import tw from 'twin.macro';
import { CaptionText, Heading2 } from '../shared';

export const PaymentCardContainer = styled.div`
  ${tw`
    p-9
    bg-background-dark
    text-center
    rounded-xl
  `}
`;

export const PaymentTitle = styled(Heading2)`
  ${tw`
    font-Inter
    mb-6
    font-semibold
  `}
`;

export const PaymentDetailsList = styled.ul`
  ${tw`
    list-none
    my-6
    mx-0
    p-0
    flex
    flex-col
    gap-4
  `}
`;

export const PaymentDetailsListItem = styled.li`
  ${tw`
    flex
    justify-between
    items-center
    text-white
    gap-12
  `}

  opacity: 0.5 !important;
`;

export const Warning = styled(CaptionText)`
  ${tw`
    text-red-500
    text-sm
    my-4
    text-left
  `}
`;

export const Info = styled(CaptionText)`
  ${tw`
    text-sm
    mt-2
  `}
  background-image: var(--brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Consent = styled.div`
  ${tw`
    text-lg
    mt-2
    text-white
    text-opacity-80
    flex
    w-full
    items-center
    gap-4
  `}

  & a {
    background-image: var(--brand-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
