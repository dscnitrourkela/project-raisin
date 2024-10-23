import Image from 'next/image';
import {
  PreviewCardContainer,
  PreviewCardContent,
  PreviewMoreInfoButton,
  PreviewMoreInfoButton2,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, PreviewDescription = '' }) {
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 20 ? words.slice(0, 30).join(' ') + '...' : PreviewDescription;

  return (
    <PreviewCardContainer>
      <Image
        src={ImageURL}
        alt='image'
        width={500}
        height={500}
        className='w-full lg:w-[416px] xlg:w-[372px] object-cover rounded-2xl'
      />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <div className='flex justify-center gap-10 sm:gap-10 xlg:gap-10 mt-2 '>
        <PreviewMoreInfoButton2>Rulebook</PreviewMoreInfoButton2>
        <PreviewMoreInfoButton>Register</PreviewMoreInfoButton>
      </div>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
