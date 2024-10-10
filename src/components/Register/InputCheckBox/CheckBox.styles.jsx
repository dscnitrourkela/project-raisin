import styled from 'styled-components';
import tw from 'twin.macro';

export const CheckBoxContainer = styled.div`
  ${tw`flex items-center space-x-2 sm:space-x-3 md:space-x-4`}
`;

export const CheckBoxInput = styled.input`
  ${tw`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 accent-[#65558F]`}
`;

export const CheckBoxLabel = styled.label`
  ${tw`font-prompt text-base sm:text-lg`}
`;
