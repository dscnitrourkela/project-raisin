'use client';

import { EventsContainer, Heading3 } from './page.style';
import MainCarousel from '@/components/EventsPage/index';
import { FlagshipData } from '@/config/content/EventsPage/FlagshipEvents/Data';
import { ExhibitionData } from '@/config/content/EventsPage/Exhibition/Data';
import { MainEventData } from '@/config/content/EventsPage/MainEvents/Data';

import { FunData } from '@/config/content/EventsPage/FunEvents/Data';
import { GalleryWrapper } from '@/components/EventsPage/Gallery/CardWrapper';
import { DtsData } from '@/config/content/EventsPage/DTS_Shows/Data';
import { GlData } from '@/config/content/EventsPage/GuestLecture/Data';

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <EventsContainer>
        <Heading3>FLAGSHIP EVENTS</Heading3>
        <MainCarousel EventItem={FlagshipData} />
        <Heading3>MAIN EVENTS</Heading3>
        <MainCarousel EventItem={MainEventData} />
        <Heading3>FUN EVENTS</Heading3>
        <MainCarousel EventItem={FunData} />
        <Heading3>EXHIBITION</Heading3>
        <MainCarousel EventItem={ExhibitionData} />
        <Heading3>SHOWS AT DTS</Heading3>
        <MainCarousel EventItem={DtsData} />
        <Heading3>GUEST LECTURES</Heading3>
        <MainCarousel EventItem={GlData} />
        <Heading3>GALLERY</Heading3>
        <GalleryWrapper />
      </EventsContainer>
    </div>
  );
}
