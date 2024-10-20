import { DTS_descriptionItems } from '@/config/content/EventsPage/DTS_Shows/Data';
import { Exhibition_descriptionItems } from '@/config/content/EventsPage/Exhibition/Data';
import { FE_descriptionItems } from '@/config/content/EventsPage/FlagshipEvents/Data';
import { GL_descriptionItems } from '@/config/content/EventsPage/GuestLecture/Data';
import { ME_descriptionItems } from '@/config/content/EventsPage/MainEvents/Data';

export const AllEvents = [
  ...FE_descriptionItems,
  ...ME_descriptionItems,
  ...Exhibition_descriptionItems,
];
