import Head from 'next/head';

const EventStructuredData = ({
  name,
  startDate,
  endDate,
  location,
  description,
  organizerName,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    startDate: startDate,
    endDate: endDate,
    location: {
      '@type': 'Place',
      name: location,
    },
    description: description,
    organizer: {
      '@type': 'Organization',
      name: organizerName,
    },
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default EventStructuredData;
