import styled from 'styled-components';
import tw from 'twin.macro';

export const InputFieldContainer = styled.input`
  border: 2px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '#999494')};

  ${tw`flex px-4 py-3 sm:py-4 items-center rounded-lg bg-transparent focus:outline-none focus:border-[#00FFD1] focus:ring-opacity-50 font-[Inter] text-base sm:text-lg duration-300 ease-in-out w-full`}

  box-shadow: ${({ $hasError }) =>
    $hasError ? '0 3px 3px 0 rgba(239, 68, 68, 0.3)' : '0 3px 3px 0 rgba(0, 255, 209, 0.3)'};
  &:focus {
    box-shadow: 0 4px 4px 0 rgba(0, 255, 209, 0.5);
  }
`;

export const InputFieldParentContainer = styled.div`
  ${tw`flex flex-col gap-5 w-full md:w-[35rem]`}
`;

export const ErrorMessage = styled.span`
  ${tw`text-red-500 text-sm font-prompt`}
`;
