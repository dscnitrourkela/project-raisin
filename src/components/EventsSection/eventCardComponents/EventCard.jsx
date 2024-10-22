import Image from 'next/image';

export const EventCard = ({ label }) => {
  console.log(label);
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(180deg, #002A2A 0%, #17001D 100%)',
          boxShadow:
            '0px 10px 50px rgba(255, 255, 255, 0.3), 0px 5px 15px rgba(255, 255, 255, 0.6)',
          position: 'relative',
        }}
        className=' w-[270px] xxsm:w-[310px] xsm:w-[347px] h-[416px]  flex justify-center items-center text-[24px] font-spaceX leading-[37px] break-words text-center rounded-3xl'
      >
        <Image src={label} alt='alt' fill style={{ objectFit: 'fill', borderRadius: '24px' }} />
      </div>
    </>
  );
};
