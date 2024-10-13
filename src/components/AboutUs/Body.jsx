import React, { useState, useEffect } from 'react';
import { firstcol, secondcol } from '@/config/content/AboutUs/AboutUs';
import {
  MainContainer,
  BodyWrapper,
  BodyContent,
  BodyContentColumn,
  BodyColumnHeading,
  BodyColumnText,
  BodyGradient,
} from './body.styles';

export const Body = () => {
  const [trimmedFirstCol, setTrimmedFirstCol] = useState(firstcol.text);
  const [readMoreFirstCol, setReadMoreFirstCol] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 950);

        if (window.innerWidth < 950 && !readMoreFirstCol) {
          setTrimmedFirstCol(firstcol.text.substring(0, 400) + '...');
        } else if (readMoreFirstCol || window.innerWidth >= 950) {
          setTrimmedFirstCol(firstcol.text);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [readMoreFirstCol]);

  return (
    <>
      <MainContainer>
        <BodyWrapper>
          <BodyGradient />
          <h1 className='text-2xl md:text-3xl lg:text-5xl mb-4 font-bold font-spacex  rounded-xl mx-10 text-center  py-16  text-white'>
            aBOUT US
          </h1>
          <BodyContent>
            <BodyContentColumn>
              <BodyColumnHeading>{firstcol.title}</BodyColumnHeading>
              <BodyColumnText>
                {trimmedFirstCol}
                {isMobile && (
                  <button
                    className='underline mx-2'
                    onClick={() => setReadMoreFirstCol(!readMoreFirstCol)}
                  >
                    {readMoreFirstCol ? 'See Less' : 'See More'}
                  </button>
                )}
              </BodyColumnText>
            </BodyContentColumn>
            <BodyContentColumn>
              <BodyColumnHeading>{secondcol.title}</BodyColumnHeading>
              <BodyColumnText>{secondcol.text}</BodyColumnText>
            </BodyContentColumn>
          </BodyContent>
        </BodyWrapper>
      </MainContainer>
    </>
  );
};
