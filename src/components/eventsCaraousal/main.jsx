import { Heading1 } from '../shared/Typography/Headings';
import { SliderEventsWrapper } from './eventWrapper';

export const EventCarousalMain = () => {
  return (
    <>
      <div className='pt-64 min-h-screen w-full flex flex-col pb-64'>
        <div className='ml-10'>
          <Heading1>EVENTS</Heading1>
        </div>
        <SliderEventsWrapper />
      </div>
    </>
  );
};
