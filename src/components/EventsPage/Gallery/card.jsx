import Image from 'next/image';

export const GalleryCard = ({ label }) => {
  return (
    <div className='w-full h-full relative'>
      {' '}
      {/* Ensure the container fills its grid space */}
      <Image
        src={label}
        alt='gallery'
        fill
        style={{ objectFit: 'cover', borderRadius: '4px' }} // Ensures image covers the container
      />
    </div>
  );
};
