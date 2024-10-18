import { BodyTitle } from '@/components/AboutUs/body.styles';

export const Header = () => {
  return (
    <>
      <div id='events'>
        <div className='flex items-center w-full overflow-hidden bg-black bg-opacity-50'>
          <BodyTitle
            className='w-full'
            style={{
              marginBottom: '0px',
            }}
          >
            EVENTS
          </BodyTitle>
        </div>
      </div>
    </>
  );
};
