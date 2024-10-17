import Image from 'next/image';
import {
  PreviewCardContainer,
  PreviewCardContent,
  PreviewCardImage,
  PreviewMoreInfoButton,
} from './PreviewCard.style';

function PreviewCard({ ImageURL, PreviewDescription = '' }) {
  const words = PreviewDescription?.split(' ') || [];
  const truncatedDescription =
    words.length > 20 ? words.slice(0, 38).join(' ') + '...' : PreviewDescription;

  return (
    <PreviewCardContainer>
      <Image
        src={ImageURL}
        alt='CardImage'
        width={338}
        height={250}
        className='h-[150px] xxs:h-[165px] 2xs:h-[175px] xsm:h-[199px] ssm:h-[214px] sm:h-[235px] md:h-[260px] w-full md:w-[305px]  lg:w-[338px] lg:h-[300px] mb-2 rounded-[17.82px]'
      />
      <PreviewCardContent>{truncatedDescription}</PreviewCardContent>
      <PreviewMoreInfoButton>MORE</PreviewMoreInfoButton>
    </PreviewCardContainer>
  );
}

export default PreviewCard;
