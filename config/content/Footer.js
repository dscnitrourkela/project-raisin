/* eslint-disable max-len */
import {
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/navLogo.svg';

export default {
  innovision: {
    img: logo,
    alt: 'Innovision 2k22',
  },
  title: 'Innovision 2k22',
  desc: `
  INNOVISION, one of the largest techno-management fest in eastern India, aims at providing a stage for young budding minds to exhibit their talents. Our primary goal is to create awareness for great ideas that would help humanity and society.`,
  quicklinks: {
    title: 'Quick Links',
    list: [
      {
        name: 'Technical Events',
        link: '/technical-events',
      },
      {
        name: 'Guest Lectures',
        link: '/guest-lectures',
      },
      {
        name: 'C.A program',
        link: '/campus-ambassador',
      },
      {
        name: 'Fun Events',
        link: '/fun-events',
      },
      {
        name: 'Pro Shows',
        link: '/proshows',
      },
      {
        name: 'Workshops',
        link: '/workshops',
      },
      // {
      //   name: 'Register',
      //   link: '/register',
      // },
      {
        name: 'Exhibition',
        link: '/exhibition',
      },
    ],
  },
  contactTitle: "Let's Connect",
  contact: [
    {
      icon: faMapMarkerAlt,
      link: '',
      text: 'SAC, NIT Rourkela, Odisha - 769008',
    },
    {
      icon: faPhoneAlt,
      link: '',
      text: '+91 7655070696',
    },
    {
      icon: faEnvelope,
      link: '',
      text: 'innovision.nitrkl@gmail.com',
    },
  ],
  socials: [
    {
      icon: faFacebookSquare,
      link: 'https://www.facebook.com/innonitr/',
    },
    {
      icon: faInstagramSquare,
      link: 'https://www.instagram.com/inno.nitr/',
    },
    {
      icon: faYoutubeSquare,
      link: 'https://www.youtube.com/c/InnovisionNITRourkelaTech',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/innovision-nitrkl/',
    },
    {
      icon: faTwitterSquare,
      link: 'https://twitter.com/innonitr',
    },
  ],
  devLink: {
    link: 'https://github.com/dscnitrourkela',
    linkText: 'GDSC NIT Rourkela',
  },
};
