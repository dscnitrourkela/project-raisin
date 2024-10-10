import Image from 'next/image';
import { StyledImageContainer } from './ImageContainer.style';

export const EventImage = ({ imgurl, alt }) => {
  return (
    <StyledImageContainer>
      <Image src={imgurl} alt={alt} width={500} height={267.34} />
    </StyledImageContainer>
  );
};
