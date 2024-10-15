import './Hero.css';
import Image from 'next/image';
import Link from 'next/link';
import { HeroGreenPrimaryButton, HeroLogoText, HeroPrimaryButton, HeroSubLogoText } from './styles';

const Hero = () => {
  return (
    <div className='relative h-screen overflow-hidden md:h-[105vh] flex-col justify-center items-center'>
      <div className='absolute inset-0 -z-10 bg-hero-primary bottom-[-32%] lg:bottom-0' />

      <div className='absolute inset-0 z-10 flex items-end justify-center'>
        <div className='relative aspect-square md:w-[90%] max-h-[90%] -translate-x-8 transition-all duration-200 md:-translate-x-0 h-[87dvh] xxxs:h-[85dvh]'>
          <Image
            src='https://res.cloudinary.com/dpmlrxlzr/image/upload/v1728970226/robot_embkcs.png'
            alt='Robot image'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center mt-32'>
        <div className='flex flex-col items-end leading-none '>
          <HeroLogoText className='flicker'>INNOVISION</HeroLogoText>
          <div className=''>
            <svg className='font-techno h-[55px] 2xs:h-[60px] sm:h-[85px] md:ht-[115px] lg:h-[155px] '>
              <text
                x='100%'
                y='90%'
                textAnchor='end'
                className='text-[50px] 2xs:text-[55px] sm:text-[80px] md:text-[110px] lg:text-[150px] stroke-[1px] sm:stroke-[2px] md:stroke-[3px] '
              >
                24
              </text>
            </svg>
          </div>
        </div>
        <div className='h-auto py-[50px] flex flex-col justify-center items-center relative gap-2 mb-12 md:mb-0 px-[10px]'>
          <div className='text-2xl font-thin text-center font-prompt pb-[20px]'>
            Navigating the tech cosmos and shaping the future landscape
          </div>
          <div className='font-bulgatti absolute bottom-0 right-20 lg:right-10 translate-x-[20%] md:translate-x-1/2 scale-[70%] md:scale-80 lg:scale-100 translate-y-1/2 md:translate-y-[20%]'>
            <Image src='/assets/images/are_u_ready.svg' alt='' width={300} height={100} />
          </div>
        </div>
        <div className='flex gap-8 mt-[70px]'>
          <Link href='/register'>
            <HeroPrimaryButton className='haloGlow'>Register</HeroPrimaryButton>
          </Link>
          <Link
            href='https://drive.google.com/file/d/1jWXT8ShzBW5KTn50DrTsgSqLgmSJMwTO/view?usp=sharing'
            target='_blank'
          >
            <HeroGreenPrimaryButton className='haloGlow'>Brochure</HeroGreenPrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
