import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
  h-[110%]
  `}
`;

const VideoContainer = styled.div`
  ${tw`
  absolute
  -z-[10]
  top-0
  left-0
  w-screen
  h-full
  overflow-hidden
  `}
`;

const VideoElement = styled.video`
  ${tw`
  scale-[1.2]
  min-w-full
  min-h-full
  object-cover
  mt-[145px]
  sm:mt-[30px]
  translate-x-[20px]
  `}
`;

function VideoBackground() {
  const vid =
    'https://res.cloudinary.com/dre1cttiu/video/upload/v1698253837/Innovision/Website_gsr1wl.mp4';
  return (
    <Container>
      <VideoContainer>
        <VideoElement autoPlay muted loop>
          <source src={vid} type='video/mp4' />
        </VideoElement>
      </VideoContainer>
    </Container>
  );
}

export default VideoBackground;
