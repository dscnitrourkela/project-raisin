import Image from 'next/image';

export const SponsorCategory = ({ title, sponsors }) => (
  <div
    className='p-4 mb-4 rounded-lg sm:p-6 sm:mb-6 h-auto'
    style={{
      background: 'linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%)',
    }}
  >
    <h2 className='mb-3 text-xl font-bold text-white sm:text-2xl sm:mb-4 font-montserrat text-center'>
      {title}
    </h2>
    <div className='flex flex-wrap justify-around items-center  gap-4 sm:gap-6 md:gap-8'>
      {sponsors.map((sponsor, index) => (
        <div key={index} className='w-1/3 sm:w-1/4 md:w-auto'>
          <Image
            src={sponsor.src}
            alt={sponsor.name}
            width={sponsor.width}
            height={sponsor.height}
            className='object-contain w-full h-full'
          />
        </div>
      ))}
    </div>
  </div>
);
