// components/EventsPage/EventsPage.jsx
import MainCarousel from './Carousel/MainCarousel/MainCarousel';

const EventsPage = () => {
  const previewItems = [
    {
      id: 1,
      ImageURL: 'https://picsum.photos/500',
      PreviewDescription: 'xbvfxvbzfdbzvcbvcbvcbvcbcvb',
      // other props for PreviewCard
    },
    {
      id: 2,
      ImageURL: 'https://picsum.photos/600',
      PreviewDescription: 'xbvfxvbzfdbzvcbvcbsvgfsdgdsvcbvcbcvb',
      // other props for PreviewCard
    },
    {
      id: 3,
      ImageURL: 'https://picsum.photos/400',
      PreviewDescription: 'xbvfxvbzfdbcvzvczxzvcbvcbvcbvcbcvb',
      // other props for PreviewCard
    },
    {
      id: 4,
      ImageURL: 'https://picsum.photos/600',
      PreviewDescription: 'xbvfxvbsvdcszzfdbzvcbvcbvcbvcbcvb',
      // other props for PreviewCard
    },
    {
      id: 5,
      ImageURL: 'https://picsum.photos/500',
      PreviewDescription: 'xbvfxvbzfdbzvcbvcbvcbvcbcvb',
      // other props for Preview
    },
    {
      id: 6,
      ImageURL: 'https://picsum.photos/600',
      PreviewDescription: 'xbvfxvbzfdbzvcbvcbsvgfsdgdsvcbvcbcvb',
      // other props for PreviewCard
    },
    {
      id: 7,
      ImageURL: 'https://picsum.photos/400',
      PreviewDescription: 'xbvfxvbzfdbcvzvczxzvcbvcbvcbvcbcvb',
    },
  ];

  const descriptionItems = [
    {
      id: 1,
      Heading: 'Event 1',
      Description: 'Description for Event 1',
      ImageURL: 'https://picsum.photos/800',
      // other props for DescriptionCard
    },
    {
      id: 2,
      Heading: 'Event 2',
      Description: 'Description for Event 2',
      ImageURL: 'https://picsum.photos/900',
      // other props for DescriptionCard
    },
    {
      id: 3,
      Heading: 'Event 3',
      Description: 'Description for Event 3',
      ImageURL: 'https://picsum.photos/800',
      // other props for DescriptionCard
    },
    {
      id: 4,
      Heading: 'Event 4',
      Description: 'Description for Event 4',
      ImageURL: 'https://picsum.photos/600',
      // other props for DescriptionCard
    },
    {
      id: 5,
      Heading: 'Event 5',
      Description: 'Description for Event 5',
      ImageURL: 'https://picsum.photos/800',
      // other props for DescriptionCard
    },
    {
      id: 6,
      Heading: 'Event 6',
      Description: 'Description for Event 6',
      ImageURL: 'https://picsum.photos/900',
      // other props for DescriptionCard
    },
    {
      id: 7,
      Heading: 'Event 7',
      Description: 'Description for Event 7',
      ImageURL: 'https://picsum.photos/800',
      // other props for DescriptionCard
    },
    {
      id: 8,
      Heading: 'Event 8',
      Description: 'Description for Event 8',
      ImageURL: 'https://picsum.photos/600',
      // other props for DescriptionCard
    },
    {
      id: 9,
      Heading: 'Event 9',
      Description: 'Description for Event 9',
      ImageURL: 'https://picsum.photos/800',
      // other props for DescriptionCard
    },
    {
      id: 10,
      Heading: 'Event 10',
      Description: 'Description for Event 10',
      ImageURL: 'https://picsum.photos/900',
      // other props for DescriptionCard
    },
    // Add more items as needed
  ];

  return <MainCarousel previewItems={previewItems} descriptionItems={descriptionItems} />;
};

export default EventsPage;
