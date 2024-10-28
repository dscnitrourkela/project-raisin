import styled from 'styled-components';
import tw from 'twin.macro';

export const CheckBoxParentContainer = styled.div`
  ${tw`flex flex-col gap-2 items-start`}
`;

export const CheckBoxContainer = styled.div`
  ${tw`flex items-center justify-between space-x-2 sm:space-x-3 md:space-x-4 w-full md:w-[35rem]`}
`;

export const CheckBoxInput = styled.input`
  ${tw`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 accent-[#65558F]`}
`;

export const CheckBoxLabel = styled.span`
  ${tw`font-prompt text-base w-3/4 2xs:w-auto sm:text-lg`}
`;
