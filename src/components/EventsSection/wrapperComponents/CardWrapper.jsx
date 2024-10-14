import { CardLabel } from '../eventCardComponents/Cardlabel';
import { EventCard } from '../eventCardComponents/EventCard';

export const CardWrapper = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'>
        {item.map((items, index) => (
          <div key={index} className="className='p-20 flex flex-col items-center gap-10">
            <EventCard label={items} />
            <CardLabel />
          </div>
        ))}
      </div>
    </>
  );
};
const item = ['FLaGSHIP', 'GUEST LECTURE', 'MaIN EvENTS'];
