// import { sliderData } from '@/app/config/content/sliderData';

import { SliderData } from '../../../config/content/eventsCarauselData';

export const PaBullets = ({ currentindex }) => {
  return (
    <>
      <div className='flex gap-2'>
        {SliderData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentindex === index ? 'bg-gray-600' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};
