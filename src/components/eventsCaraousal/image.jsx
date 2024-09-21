import Image from 'next/image';
import { StyledImageContainer } from './imageContsiner.style';

export const EventImage = ({ imgurl }) => {
  return (
    <StyledImageContainer>
      <Image src={imgurl} alt='im' width={416.15} height={267.34} />
    </StyledImageContainer>
  );
};
