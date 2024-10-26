'use client';

import { EventsContainer, Heading3 } from './page.style';
import MainCarousel from '@/components/EventsPage/index';
import {
  FE_descriptionItems,
  FE_previewItems,
} from '@/config/content/EventsPage/FlagshipEvents/Data';
import {
  Exhibition_descriptionItems,
  Exhibition_previewItems,
} from '@/config/content/EventsPage/Exhibition/Data';
import { ME_descriptionItems, ME_previewItems } from '@/config/content/EventsPage/MainEvents/Data';

import {
  FunEvents_previewItems,
  FunEvents_descriptionItems,
} from '@/config/content/EventsPage/FunEvents/Data';
import { ComingSoon } from '@/components/EventsPage/ComingSoon';
import { GalleryWrapper } from '@/components/EventsPage/Gallery/CardWrapper';

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <EventsContainer>
        <Heading3>FLAGSHIP EVENTS</Heading3>
        <MainCarousel previewItems={FE_previewItems} descriptionItems={FE_descriptionItems} />
        <Heading3>MAIN EVENTS</Heading3>
        <MainCarousel previewItems={ME_previewItems} descriptionItems={ME_descriptionItems} />
        <Heading3>FUN EVENTS</Heading3>
        <MainCarousel
          previewItems={FunEvents_previewItems}
          descriptionItems={FunEvents_descriptionItems}
        />
        <Heading3>EXHIBITION</Heading3>
        <MainCarousel
          previewItems={Exhibition_previewItems}
          descriptionItems={Exhibition_descriptionItems}
        />
        <Heading3>SHOWS AT DTS</Heading3>
        <ComingSoon />
        <Heading3>GUEST LECTURES</Heading3>
        <ComingSoon />
        <Heading3>GALLERY</Heading3>
        <GalleryWrapper />
      </EventsContainer>
    </div>
  );
}
