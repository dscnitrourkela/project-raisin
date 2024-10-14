'use client';
import { Heading3 } from '@/components/shared/Typography/Headings';
import { EventsContainer } from './page.style';
import MainCarousel from '@/components/EventsPage/index';
import {
  GL_previewItems,
  GL_descriptionItems,
} from '@/config/content/EventsPage/GuestLecture/Data';

export default function Page() {
  return (
    <EventsContainer>
      <Heading3>GUEST LECTURES</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>FLAGSHIP EVENTS</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>MAIN EVENTS</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>EXHIBITION</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>SHOWS AT DTS</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>GALLERY</Heading3>
    </EventsContainer>
  );
}
