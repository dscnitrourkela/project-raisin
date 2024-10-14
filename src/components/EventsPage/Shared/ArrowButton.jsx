// components/EventsPage/Shared/ArrowButton.jsx
import tw, { styled } from 'twin.macro';

const commonStyles = tw`absolute top-1/4 transform -translate-y-1/2 bg-cover bg-no-repeat w-11 h-16 cursor-pointer transition-all duration-200 ease-in-out`;

const LeftArrowButton = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1728883189/Inno2k24/o9yetaxkolszugpanrje.svg');
  ${commonStyles}
  ${({ position }) => (position === 'left' ? tw`left-4 ` : tw`right-4`)}

  z-index: 10;

  &:active {
    transform: scale(0.95) translateY(-50%); /* Scale down slightly for pressing effect */
  }
`;

const RightArrowButton = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1728882379/Inno2k24/vuhoovvao6vacti50rcr.svg');
  ${commonStyles}
  ${({ position }) => (position === 'left' ? tw`left-4 ` : tw`right-4`)}

  z-index: 10;

  &:active {
    transform: scale(0.95) translateY(-50%); /* Scale down slightly for pressing effect */
  }
`;

export { LeftArrowButton, RightArrowButton };
