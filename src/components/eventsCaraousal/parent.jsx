import { GradientOverlay, InnerBackground, StyledParentCard } from './parent.Style';

export const ParentEventCardComponent = ({ children }) => {
  return (
    <StyledParentCard>
      <GradientOverlay aria-hidden='true'>
        <InnerBackground />
      </GradientOverlay>
      <div className='relative z-10'>{children}</div>
    </StyledParentCard>
  );
};
