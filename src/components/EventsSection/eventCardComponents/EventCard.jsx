export const EventCard = ({ label }) => {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(180deg, #002A2A 0%, #17001D 100%)',
          boxShadow: '0px 4px 31px 0px rgba(255, 255, 255, 0.25)',
        }}
        className='w-[310px] xsm:w-[347px] h-[416px] rounded-[4px] flex justify-center items-center text-[24px] font-orbitron leading-[37px]'
      >
        {label}
      </div>
    </>
  );
};
