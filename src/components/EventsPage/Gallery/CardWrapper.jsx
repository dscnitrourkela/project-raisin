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
    <div className='relative w-full p-4'>
      <div
        className={
          isMobile
            ? 'flex overflow-x-auto gap-4 pb-4 -mt-24 snap-x snap-mandatory scrollbar-hide'
            : 'flex flex-wrap gap-6 justify-start'
        }
        style={
          isMobile
            ? {
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }
            : {}
        }
      >
        {GalleryData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${isMobile ? 'snap-center flex-none' : ''}`}
            style={
              isMobile
                ? {
                    width: '80vw',
                    minHeight: '300px',
                    maxWidth: '400px',
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
