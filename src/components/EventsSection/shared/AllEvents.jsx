import { DtsData } from '@/config/content/EventsPage/DTS_Shows/Data';
import { ExhibitionData } from '@/config/content/EventsPage/Exhibition/Data';
import { FunData } from '@/config/content/EventsPage/FunEvents/Data';
import { GlData } from '@/config/content/EventsPage/GuestLecture/Data';
import { MainEventData, ME_descriptionItems } from '@/config/content/EventsPage/MainEvents/Data';

export const AllEvents = [...FunData, ...MainEventData, ...ExhibitionData, ...DtsData, ...GlData];
