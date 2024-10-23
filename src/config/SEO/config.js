const images = [
  'https://media.licdn.com/dms/image/v2/C510BAQHGzzyb-fVW7g/company-logo_200_200/company-logo_200_200/0/1630615007266/innovision_nitrkl_logo?e=2147483647&v=beta&t=CNUAlswYqI6pCQD4ZSUZINQ1vqwJnYuf0jG08PKdvZo',
  'https://www.nitrkl.ac.in/assets/images/gallery3.jpg',
  'https://www.nitrkl.ac.in/assets/images/gallery1.jpg',
];
const description =
  'Join us for the biggest college event of the year! Featuring workshops, competitions, and networking opportunities.';
const metadataBase = new URL('https://innonitrkl.in/');
const title = { default: 'INNOVISION 2024 | NIT ROURKELA', template: `%s | INNOVISION` };
const url = 'https://innonitrkl.in/';

export { metadataBase, title, url, description, images };
