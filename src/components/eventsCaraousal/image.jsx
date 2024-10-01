import Image from 'next/image';
import { StyledImageContainer } from './imageContainer.style';

export const EventImage = ({ imgurl, alt }) => {
  return (
    <StyledImageContainer>
      <Image src={imgurl} alt={alt} width={416.15} height={267.34} />
    </StyledImageContainer>
  );
};
