import Image from 'next/image';
import { MainContainer } from './image.styles';

export const HeroImage = () => {
  return (
    <>
      <MainContainer>
        <Image
          className='mx-auto'
          src='/static/images/about_bg.png'
          height={1200}
          width={1200}
          alt='Galaxy Background'
        />
      </MainContainer>
    </>
  );
};
