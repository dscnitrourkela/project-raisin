import { BodyTitle } from '@/components/AboutUs/body.styles';

export const Header = () => {
  return (
    <>
      <div id='events'>
        <div className='w-full flex items-center overflow-hidden'>
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
