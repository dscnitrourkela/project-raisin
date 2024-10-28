import styled from 'styled-components';
import tw from 'twin.macro';
export const SearchContainer = styled.div`
  ${tw`w-full relative`}
`;

export const SearchInnerContainer = styled.div`
  ${tw`relative w-full`}
`;

export const SearchFieldInput = styled.input`
  ${tw`
    w-full
    py-2 
    px-3 
    pr-10
    text-sm
    rounded-md
    transition-all
    duration-150
    ease-in-out
    text-white
    font-prompt
    bg-black
    border-2
    border-gray-700
    focus:outline-none
  `}
`;

export const ClearButton = styled.button`
  ${tw`
    absolute 
    right-8 
    top-1/2 
    -translate-y-1/2
    p-1
    rounded-full
    text-white
    hover:(bg-gray-100)
    transition-colors
    duration-150
    focus:(outline-none ring-2 ring-blue-500)
  `}
`;

export const IconContainer = styled.div`
  ${tw`
    absolute 
    right-2 
    top-1/2 
    -translate-y-1/2
    text-gray-400
    pointer-events-none
  `}
`;

export const ErrorMessage = styled.p`
  ${tw`mt-1 text-sm text-red-500`}
`;
