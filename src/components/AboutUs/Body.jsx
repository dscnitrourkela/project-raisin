import React, { useState, useEffect } from 'react';
import { aboutUsData } from '../../config/content/AboutUs/AboutUs';
import {
  MainContainer,
  BackgroundDiv,
  CircleDiv,
  SectionWithBgImage,
  AboutHeading,
  Paragraph1,
  AboutSection,
} from './body.styles';

export const Body = () => {
  const [trimmedData, setTrimmedData] = useState(aboutUsData);
  const [readMore, setReadMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth < 768 && !readMore) {
          setTrimmedData(aboutUsData.substring(0, 500) + '...');
        } else if (readMore || window.innerWidth >= 768) {
          setTrimmedData(aboutUsData);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Call once to set initial state
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [readMore]);

  return (
    <>
      <MainContainer>
        <BackgroundDiv>
          <CircleDiv />
        </BackgroundDiv>
        <SectionWithBgImage>
          <AboutSection>
            <AboutHeading>ABOUT US</AboutHeading>
          </AboutSection>
          <Paragraph1>
            {trimmedData}{' '}
            {isMobile && (
              <button className='underline mx-2' onClick={() => setReadMore(!readMore)}>
                Read {readMore ? 'less' : 'more'}
              </button>
            )}
          </Paragraph1>
        </SectionWithBgImage>
      </MainContainer>
    </>
  );
};
