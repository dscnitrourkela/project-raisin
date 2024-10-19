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
        alt='CardImage'
        width={338}
        height={250}
        className='rounded-[17.82px] h-[170px] xxs:h-[180px] 2xs:h-[190px] xsm:h-[199px] ssm:h-[214px] sm:h-[235px] md:h-[260px] w-full md:w-[305px]  lg:w-[338px] lg:h-[240px] '
      />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <div className='flex justify-center gap-4 mt-4'>
        {' '}
        {/* Reduced gap for symmetry */}
        <PreviewMoreInfoButton2>Rulebook</PreviewMoreInfoButton2>
        <PreviewMoreInfoButton>Register</PreviewMoreInfoButton>
      </div>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
