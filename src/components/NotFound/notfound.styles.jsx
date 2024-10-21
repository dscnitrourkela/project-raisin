import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center min-h-screen text-gray-100 font-orbitron`};

  background: url('https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728797925/registration_si85oa.png');
  filter: brightness(1.1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  ${tw`text-4xl mb-6 text-center`}
`;

const Message = styled.p`
  ${tw`text-lg mb-8 text-center`}
`;

const Button = styled.button`
  ${tw`px-6 py-3 text-base bg-gray-800 text-white rounded-md cursor-pointer transition-all font-orbitron`};

  &:hover {
    ${tw`bg-gray-700`}
  }
`;

export { Container, Heading, Message, Button };
