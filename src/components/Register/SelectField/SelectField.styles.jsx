import styled from 'styled-components';
import tw from 'twin.macro';

export const SelectFieldParentContainer = styled.div`
  ${tw`flex flex-col gap-10 w-full md:w-[35rem]`}
`;

export const SelectFieldContainer = styled.div`
  position: relative;
  ${tw`flex px-4 py-3 md:py-4 items-center rounded-lg border-2 border-solid bg-transparent font-[Inter] text-base sm:text-lg duration-300 ease-in-out w-full`}
  border: 2px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '#999494')};
  box-shadow: ${({ $hasError }) =>
    $hasError ? '0 3px 3px 0 rgba(239, 68, 68, 0.3)' : '0 3px 3px 0 rgba(0, 255, 209, 0.3)'};

  &:focus-within {
    border-color: #00ffd1;
    box-shadow: 0 4px 4px 0 rgba(0, 255, 209, 0.5);
  }
`;

export const SelectFieldInput = styled.select`
  ${tw`appearance-none outline-none border-0 shadow-none flex-1 px-4 text-white bg-[#050b17] cursor-pointer w-full`}

  ::-ms-expand {
    display: none;
  }
`;
