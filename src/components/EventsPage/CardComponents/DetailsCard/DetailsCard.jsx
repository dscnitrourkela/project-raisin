import Image from 'next/image';
import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
} from './DetailsCard.style';

function DetailsCard({ ImageURL, Heading, Description }) {
  return (
    <DescriptionCardContainer>
      <DescriptionCardInner>
        <DescriptionCardHeading>{Heading}</DescriptionCardHeading>
        <DescriptionCardContent>{Description}</DescriptionCardContent>
      </DescriptionCardInner>
      <Image
        src={ImageURL}
        alt='image'
        width={416}
        height={458}
        className='h-[275px] xxs:h-[287px] 2xs:h-[305px] xsm:h-[325px] ssm:h-[348px] sm:h-[360px] md:h-[400px] lg:h-[458px]  xlg:w-[372px] w-full lg:w-[416px] rounded-2xl'
      />
    </DescriptionCardContainer>
  );
}

export default DetailsCard;
