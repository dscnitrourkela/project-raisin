import { ChildContainer, GradientOverlay, InnerBackground, StyledParentCard } from './parent.Style';

export const ParentEventCardComponent = ({ children }) => {
  return (
    <StyledParentCard>
      <GradientOverlay aria-hidden='true'>
        <InnerBackground />
      </GradientOverlay>
      <ChildContainer>{children}</ChildContainer>
    </StyledParentCard>
  );
};
