import tw from 'twin.macro';
import styled from 'styled-components';

export const PayContainer = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1728888341/Inno2k24/yupqoznoucyhxwchhbv7.png');
  ${tw`w-full flex flex-col items-center justify-center bg-cover pt-36 `}
`;

export const PayButtonWrap = styled.div`
  ${tw`w-full bg-teal-600 px-4 py-3 rounded mx-3 hover:cursor-pointer hover:bg-teal-700 my-5 flex flex-col items-center justify-center`}
`;
