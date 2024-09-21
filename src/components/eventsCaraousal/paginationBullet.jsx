// import { sliderData } from '@/app/config/content/sliderData';

import { sliderData } from '@/config/content/eventsCarauselData';

export const PaBullets = ({ currentindex }) => {
  return (
    <>
      <div className='flex gap-2'>
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentindex === index ? 'bg-gray-500' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};
