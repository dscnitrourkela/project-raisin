'use client';
// import {
//   GL_descriptionItems,
//   GL_previewItems,
// } from '@/config/content/EventsPage/GuestLecture/Data';
// import { Heading3 } from '@/components/shared/Typography/Headings';
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
// import { DTS_previewItems, DTS_descriptionItems } from '@/config/content/EventsPage/DTS_Shows/Data';
import { ME_descriptionItems, ME_previewItems } from '@/config/content/EventsPage/MainEvents/Data';
<
import {
  FunEvents_previewItems,
  FunEvents_descriptionItems,
} from '@/config/content/EventsPage/FunEvents/Data';
import { ComingSoon } from '@/components/EventsPage/ComingSoon';
import { GalleryWrapper } from '@/components/EventsPage/Gallery/CardWrapper';
// import { GalleryWrapper, Gallerywrapper } from '@/components/EventsPage/Gallery/CardWrapper';
// import { GalleryWrapper } from '@/components/EventsPage/Gallery/CardWrapper';

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
        {/* <MainCarousel previewItems={DTS_previewItems} descriptionItems={GL_descriptionItems} /> */}
        <ComingSoon />
        <Heading3>GUEST LECTURES</Heading3>
        {/* <MainCarousel previewItems={GL_previewItems} descriptionItems={GL_descriptionItems} /> */}
        <ComingSoon />
        <Heading3>GALLERY</Heading3>
        <GalleryWrapper />
      </EventsContainer>
    </div>
  );
}
