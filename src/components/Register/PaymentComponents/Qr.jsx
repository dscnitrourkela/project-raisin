import Image from 'next/image';

export const Qr = ({ QrUrl }) => {
  return (
    <>
      <div className='flex justify-center'>
        <Image src={QrUrl} alt='Qr' width={200} height={200} />
      </div>
    </>
  );
};
