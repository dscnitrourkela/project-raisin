import styled from 'styled-components';
import tw from 'twin.macro';
export const SelectFieldContainer = styled.div`
  position: relative;
  ${tw`flex px-4 py-3 sm:py-4 md:py-5 lg:py-6 items-center w-full rounded-lg border-2 border-solid border-[#999494] bg-transparent focus:outline-none focus:border-[#00FFD1] focus:ring-opacity-50 font-[Inter] text-base sm:text-lg duration-300 ease-in-out`}

  ::after {
    content: '\u25BC';
    position: absolute;
    ${tw`top-1/2 right-4 transform -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out`}
  }
  :hover::after {
    ${tw`text-[#00ffd1]`}
  }
`;

export const SelectFieldInput = styled.select`
  ${tw`appearance-none outline-none border-0 shadow-none flex-1 px-4 text-white bg-[#050b17] cursor-pointer w-full`}
  ::-ms-expand {
    display: none;
  }
`;
