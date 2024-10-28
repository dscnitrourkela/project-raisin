import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center min-h-screen  text-gray-100 font-orbitron`}
`;

const Message = styled.p`
  ${tw`text-lg mt-4 text-center`}
`;

const Spinner = styled.span`
  ${tw`w-12 h-12 border-4 border-gray-100 border-t-transparent border-solid rounded-full animate-spin`}
`;

export { Container, Message, Spinner };
