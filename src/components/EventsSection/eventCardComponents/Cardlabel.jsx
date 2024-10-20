export const CardLabel = ({ title }) => {
  return (
    <>
      <div className='w-[270px] xxsm:w-[310px] xsm:w-[347px] min-h-[61px] h-auto font-spaceX p-3 border-[2px] border-white font-normal flex justify-center items-center  text-[16px] sm:text-[18px] text-center'>
        {title}
      </div>
    </>
  );
};
