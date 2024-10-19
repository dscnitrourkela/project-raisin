'use client';
import { EventsContainer, Heading3 } from './page.style';
import MainCarousel from '@/components/EventsPage/index';
import {
  FE_previewItems,
  FE_descriptionItems,
  ME_previewItems,
  ME_descriptionItems,
  GL_previewItems,
  GL_descriptionItems,
  Exhibition_previewItems,
  Exhibition_descriptionItems,
  DTS_previewItems,
  DTS_descriptionItems,
} from '@/config/content/EventsPage';

export default function Page() {
  return (
    <EventsContainer>
      <Heading3>FLAGSHIP EVENTS</Heading3>
      <MainCarousel previewItems={FE_previewItems} descriptionItems={FE_descriptionItems} />
      {/* <Heading3>GUEST LECTURES</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} /> */}
      <Heading3>MAIN EVENTS</Heading3>
      <MainCarousel previewItems={ME_previewItems} descriptionItems={ME_descriptionItems} />
      {/* <Heading3>SHOWS AT DTS</Heading3>
      <MainCarousel previewItems={DTS_previewItems} descriptionItems={DTS_descriptionItems} /> */}
      <Heading3>EXHIBITION</Heading3>
      <MainCarousel
        previewItems={Exhibition_previewItems}
        descriptionItems={Exhibition_descriptionItems}
      />
    </EventsContainer>
  );
}
