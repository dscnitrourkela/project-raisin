import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';

const DescriptionContainer = styled.div`
  ${tw`w-full mt-8 mb-20 h-auto relative`};
`;

const DescriptionSlide = styled(motion.div)`
  ${tw`w-full`};
`;
