import { SliderEventsWrapper } from './eventWrapper';
import { SectionHeader } from './Header';

export const EventCarousalMain = () => {
  return (
    <>
      <div className='pt-64 min-h-screen w-full flex flex-col pb-64'>
        <div className='ml-10'>
          <SectionHeader label={'EVENTS'} />
        </div>
        <SliderEventsWrapper />
      </div>
    </>
  );
};
