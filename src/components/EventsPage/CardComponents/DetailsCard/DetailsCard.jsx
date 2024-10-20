import Image from 'next/image';
import {
  DescriptionCardContainer,
  DescriptionCardInner,
  DescriptionCardHeading,
  DescriptionCardContent,
  DescriptionCardBottom,
} from './DetailsCard.style';

function DetailsCard({ ImageURL, Heading, Description, Location, Date, Time, Prizes }) {
  return (
    <div className='flex flex-col items-center gap-5'>
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
          className='h-[250px] xxs:h-[270px] 2xs:h-[280px] xsm:h-[295px] ssm:h-[308px] sm:h-[335px] md:h-[370px] lg:h-[458px]  xlg:w-[372px] w-full lg:w-[416px] rounded-2xl'
        />
      </DescriptionCardContainer>
      <div className='max-w-[1550px] w-[100%] pl-2 pr-2 xxs:pl-4 xxs:pr-4 2xs:pl-8 2xs:pr-8 xsm:pl-12 xsm:pr-12 ssm:pl-16 ssm:pr-16 sm:pl-24 sm:pr-24'>
        <DescriptionCardBottom>
          <div className='flex gap-2 items-center'>
            <Image
              src='https://res.cloudinary.com/dfe8sdlkc/image/upload/v1729309788/352521_location_on_icon_u8d6am.png'
              alt='img'
              width={60}
              height={60}
              className='w-8 h-8 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px]'
            />
            <div className='font-bold'>{Location} </div>
          </div>
          <div className='flex gap-1 items-center '>
            <Image
              src='https://res.cloudinary.com/dhv234qct/image/upload/v1729337575/ywb8h5oubo7hlqrmtjxa.svg'
              alt='img'
              width={60}
              height={60}
              className='w-8 h-8 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px]'
            />
            <div className='font-bold'>{Prizes} </div>
          </div>
          <div className='flex gap-4 items-center '>
            <Image
              src='https://res.cloudinary.com/dfe8sdlkc/image/upload/v1729311717/8981284_deadline_schedule_calendar_event_time_icon_sozwq1.png'
              alt='img'
              width={60}
              height={60}
              className='w-8 h-8 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px]'
            />
            <div className='flex flex-col '>
              <div className='font-bold'>{Date}</div>
              <div className='font-semibold text-xs xsm:text-xl text-white'>{Time}</div>
            </div>
          </div>
        </DescriptionCardBottom>
      </div>
    </div>
  );
}

export default DetailsCard;
