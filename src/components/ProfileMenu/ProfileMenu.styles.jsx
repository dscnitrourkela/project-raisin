import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export const Container = styled.div`
  ${tw`lg:absolute lg:top-60 lg:left-72 sxl:left-96 w-full h-[80vh] lg:h-full  flex items-center justify-center z-50`}
`;

export const MenuCard = styled(motion.div)`
  ${tw`min-w-[16rem] w-full max-w-[24rem] p-8 rounded-lg shadow-lg bg-black/30 border border-white/20`}
`;

export const ProfileImage = styled(Image)`
  ${tw`w-20 h-20 rounded-full my-2`}
`;

export const CloseButton = styled.button`
  ${tw`absolute top-2 right-5 text-red-500 cursor-pointer font-orbitron text-xl transition-all duration-200`}
  &:hover {
    ${tw`scale-110`}
  }
`;

export const UserName = styled.h2`
  ${tw`text-xl font-semibold font-orbitron text-white`}
`;

export const UserEmail = styled.p`
  ${tw`text-sm text-gray-300 font-orbitron`}
`;

export const MenuContent = styled.div`
  ${tw`flex flex-col items-center`}
`;

export const MenuLinks = styled.div`
  ${tw`flex flex-col gap-5 items-center justify-center mt-5 font-prompt w-full`}
`;

export const StyledLink = styled(Link)`
  ${tw`hover:underline underline-offset-4 my-5`}
`;

export const LogoutButton = styled.button`
  ${tw`bg-black/30 p-2 backdrop-blur-lg w-full transition-colors duration-500`}
  &:hover {
    ${tw`bg-black`}
  }
`;

export const menuVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    backdropFilter: 'blur(20px)',
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const menuTransition = {
  duration: 0.2,
  type: 'spring',
  stiffness: 100,
  damping: 20,
};
