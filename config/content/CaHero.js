/* eslint-disable max-len */
import mainImg from '../../images/Cahero.png';
import settingLogo from '../../images/settingLogo.png';
import laptopLogo from '../../images/laptopLogo.png';
import statsLogo from '../../images/statsLogo.png';

export default {
  image: {
    src: mainImg,
    alt: 'campus ambassador',
  },
  text: {
    title: 'CAMPPUS AMBASSADOR',
    head: 'Become A',
    eventName: 'The event INNOVISION 2K22',
  },
  flex: [
    {
      id: 0,
      logo: {
        src: settingLogo,
        alt: 'workshops',
      },
      number: 30,
      title: 'Workshop',
    },
    {
      id: 1,
      logo: {
        src: laptopLogo,
        alt: 'lectures',
      },
      number: 30,
      title: 'Lectures',
    },
    {
      id: 2,
      logo: {
        src: statsLogo,
        alt: 'sponsors',
      },
      number: 30,
      title: 'Sponsors',
    },
  ],
};
