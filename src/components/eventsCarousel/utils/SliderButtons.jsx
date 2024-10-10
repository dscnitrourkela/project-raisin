// import { SliderButton } from '../../shared/Typography/Buttons';
import { PaBullets } from './PaginationBullet';
import { SliderButton } from './sliderButton.styles';

export const SButtons = ({ fn1, fn2, currentindex }) => {
  return (
    <>
      <div className='flex justify-center gap-10 w-full mt-4 lg:mt-8 items-center'>
        <SliderButton onClick={fn1}>Prev</SliderButton>
        <PaBullets currentindex={currentindex} />
        <SliderButton onClick={fn2}>Next</SliderButton>
      </div>
    </>
  );
};
