import { AllEvents } from '@/components/EventsSection/wrapperComponents/AllEvents';
import { GalleryCard } from './card';
import { useEffect, useState } from 'react';
import { GalleryData } from '@/config/content/EventsPage/GalleryData';

export const Gallerywrapper = () => {
  const [cardSizes, setCardSizes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 820);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const sizes = AllEvents.map(() => ({
      width: getRandomSize(1, 2),
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
        className={
          isMobile
            ? 'grid grid-cols-1 xsm:grid-cols-2 gap-3 xsm:gap-6 -mt-24'
            : 'flex flex-wrap gap-6 justify-start'
        }
      >
        {GalleryData.map((item, index) => (
          <div
            key={index}
            className='rounded-lg overflow-hidden'
            style={
              isMobile
                ? {
                    minHeight: '300px',
                  }
                : {
                    width: `${cardSizes[index]?.width === 2 ? '32%' : '16%'}`,
                    minHeight: '300px',
                    flexGrow: 1,
                  }
            }
          >
            <GalleryCard label={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
