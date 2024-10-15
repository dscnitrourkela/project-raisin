import { CardLabel } from '../eventCardComponents/Cardlabel';
import { EventCard } from '../eventCardComponents/EventCard';

export const CardWrapper = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-20'>
        {item.map((items, index) => (
          <div
            key={index}
            className='p-4 md:p-10 xl:p-20 flex flex-col items-center gap-4 md:gap-6 xl:gap-10'
          >
            <EventCard label={items} />
            <CardLabel />
          </div>
        ))}
      </div>
    </>
  );
};

const item = ['FLaGSHIP', 'GUEST LECTURE', 'MaIN EvENTS'];
