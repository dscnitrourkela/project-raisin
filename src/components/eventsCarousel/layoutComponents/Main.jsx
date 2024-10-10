import { Heading1 } from '../../shared/Typography/Headings';
import { SliderEventsWrapper } from '../wrapperComponents/EventWrapper';

export const EventCarousalMain = () => {
  return (
    <>
      <div className='pt-4 min-h-screen w-full flex flex-col pb-64'>
        <div className='ml-10 flex justify-start text-left'>
          <Heading1>EVENTS</Heading1>
        </div>
        <SliderEventsWrapper />
      </div>
    </>
  );
};
