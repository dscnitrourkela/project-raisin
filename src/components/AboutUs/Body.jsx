import React, { useState, useEffect } from 'react';
import { firstcol, secondcol } from '@/config/content/AboutUs/AboutUs';
import {
  MainContainer,
  BodyWrapper,
  BodyTitle,
  BodyContent,
  BodyContentColumn,
  BodyColumnHeading,
  BodyColumnText,
  BodyGradient,
} from './body.styles';

import { easeIn, easeInOut, motion } from 'framer-motion';

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
      <MainContainer id='about us'>
        <BodyWrapper>
          <BodyGradient /> <BodyTitle>aBOUT US</BodyTitle>
          <BodyContent>
            <BodyContentColumn>
              <BodyColumnHeading>{firstcol.title}</BodyColumnHeading>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <BodyColumnText>
                  {trimmedFirstCol}
                  {isMobile && (
                    <button
                      className={`mx-2 underline ${!readMoreFirstCol ? 'text-green-500' : 'text-[#ff8dff]'} `}
                      onClick={() => setReadMoreFirstCol(!readMoreFirstCol)}
                    >
                      {readMoreFirstCol ? 'See Less' : 'See More'}
                    </button>
                  )}
                </BodyColumnText>
              </motion.div>
            </BodyContentColumn>
            <BodyContentColumn>
              <BodyColumnHeading>{secondcol.title}</BodyColumnHeading>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <BodyColumnText>{secondcol.text}</BodyColumnText>
              </motion.div>
            </BodyContentColumn>
          </BodyContent>
        </BodyWrapper>
      </MainContainer>
    </>
  );
};
