/* eslint-disable max-len */
import mainImg from '../../images/Cahero.png';
import settingLogo from '../../images/settingLogo.svg';
import laptopLogo from '../../images/laptopLogo.svg';
import statsLogo from '../../images/statsLogo.svg';

export default {
  image: {
    src: mainImg,
    alt: 'campus ambassador',
  },
  text: {
    title: 'CAMPUS AMBASSADOR',
    head: 'Become A',
    eventName: 'OF INNOVISION 2K22',
  },
  flex: [
    {
      id: 0,
      logo: {
        src: settingLogo,
        alt: 'workshops',
      },
      number: 10,
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
      number: 20,
      title: 'Sponsors',
    },
  ],
};
