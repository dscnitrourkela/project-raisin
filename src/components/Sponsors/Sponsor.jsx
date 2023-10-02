import React from 'react';

// Components
import { SponsorContainer, SponsorIcon, Wrapper } from './styles';

// Assets
import { sponsors } from '../../../config/content';
import SectionLayout from '../shared/SectionLayout';

function Sponsor() {
  const sponsorDetails = [
    {
      sponsors: sponsors.alpha,
      bcolor: '#EBB722',
      color: '#EBB722',
      span: 'span 5',
      gap: '0px',
    },
    {
      sponsors: sponsors.beta,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 5',
      gap: '30px',
    },
    {
      sponsors: sponsors.gamma,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 5',
      gap: '30px',
    },
  ];

  return (
    <SectionLayout id='sponsors' description={sponsors.content}>
      <div
        style={{
          marginTop: '1rem',
        }}
      />
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 0.5fr 0.5fr 0.5fr 1fr',
          gridGap: '30px',
        }}
      >
        {sponsorDetails.map((details) => (
          <Wrapper
            style={{
              gridColumnEnd: details.span,
            }}
            key={details.title}
          >
            <SponsorContainer style={{ gap: details.gap, gridTemplateColumns: details.grid }}>
              {details.sponsors.map(({ src, alt, size, link, margin, marginTop, title, color }) => (
                <SponsorIcon
                  key={link}
                  pic={src}
                  alt={alt}
                  size={size}
                  link={link}
                  margin={margin}
                  marginTop={marginTop}
                  title={title}
                  color={color}
                />
              ))}
            </SponsorContainer>
          </Wrapper>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Sponsor;
