import { Heading1 } from '../../shared/Typography/Headings';
import { SliderEventsWrapper } from '../wrapperComponents/EventWrapper';

export const EventCarousalMain = () => {
  return (
    <>
      <div className='-mt-32 min-h-screen w-full flex flex-col mb-44'>
        <div className='mt-7'>
          <Heading1>EVENTS</Heading1>
        </div>
        <SliderEventsWrapper />
      </div>
    </>
  );
};
