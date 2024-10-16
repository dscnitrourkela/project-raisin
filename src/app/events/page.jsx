'use client';
// import { Heading3 } from '@/components/shared/Typography/Headings';
import { EventsContainer, Heading3 } from './page.style';
import MainCarousel from '@/components/EventsPage/index';
import {
  GL_previewItems,
  GL_descriptionItems,
} from '@/config/content/EventsPage/GuestLecture/Data';

import {
  FE_previewItems,
  FE_descriptionItems,
} from '@/config/content/EventsPage/FlagshipEvents/Data';

import { ME_descriptionItems } from '@/config/content/EventsPage/MainEvents/Data';
import { DTS_previewItems } from '@/config/content/EventsPage/DTS_Shows/Data';
import { Exhibition_previewItems } from '@/config/content/EventsPage/Exhibition/Data';

export default function Page() {
  return (
    <EventsContainer>
      <Heading3>GUEST LECTURES</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>FLAGSHIP EVENTS</Heading3>
      <MainCarousel previewItems={FE_previewItems} descriptionItems={FE_descriptionItems} />
      <Heading3>MAIN EVENTS</Heading3>
      <MainCarousel previewItems={GL_previewItems} descriptionItems={ME_descriptionItems} />
      <Heading3>EXHIBITION</Heading3>
      <MainCarousel previewItems={Exhibition_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>SHOWS AT DTS</Heading3>
      <MainCarousel previewItems={DTS_previewItems} descriptionItems={GL_descriptionItems} />
      <Heading3>GALLERY</Heading3>
    </EventsContainer>
  );
}
