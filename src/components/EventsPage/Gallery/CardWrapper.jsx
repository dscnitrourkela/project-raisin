import { AllEvents } from '@/components/EventsSection/wrapperComponents/AllEvents';
import { GalleryCard } from './card';
import { useEffect, useState } from 'react';
import { GalleryData } from '@/config/content/EventsPage/GalleryData';

export const Gallerywrapper = () => {
  const [cardSizes, setCardSizes] = useState([]);

  // Get a consistent size for the flex items
  const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const sizes = AllEvents.map(() => ({
      width: getRandomSize(1, 2), // Randomize width between 1 and 2 spans
    }));
    setCardSizes(sizes);
  }, []);

  return (
    <div
      className='relative w-full'
      style={{
        padding: '1rem',
      }}
    >
      <div
        className='flex flex-wrap gap-6 justify-start'
        style={
          {
            // This ensures flex items wrap to the next row and align consistently
          }
        }
      >
        {GalleryData.map((item, index) => (
          <div
            key={index}
            className='rounded-lg overflow-hidden'
            style={{
              width: `${cardSizes[index]?.width === 2 ? '32%' : '16%'}`,
              minHeight: '300px',
              flexGrow: 1,
            }}
          >
            <GalleryCard label={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
