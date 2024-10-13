import Image from 'next/image';
import tw, { styled } from 'twin.macro';
const Container = styled.div`
  ${tw`flex flex-col w-auto md:w-[35rem]`}
`;

const BeamImage = styled(Image)`
  ${tw`w-full h-[1.5px]`}
`;

const Title = styled.h1`
  ${tw`text-xl ssm:text-2xl md:text-3xl lg:text-4xl font-light text-center mt-10 font-prompt`}
`;

const Description = styled.p`
  ${tw`text-center text-sm md:text-base mt-5 font-prompt`}
`;

const CheckBoxWrapper = styled.div`
  ${tw`mt-10 w-full`}
`;

export { Container, BeamImage, Title, Description, CheckBoxWrapper };
