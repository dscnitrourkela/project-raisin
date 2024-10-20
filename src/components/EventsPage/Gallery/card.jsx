import Image from 'next/image';

export const GalleryCard = ({ label }) => {
  return (
    <div className='w-full h-full relative'>
      <Image src={label} alt='gallery' fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
    </div>
  );
};
