/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const config = require('./config/website');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
  ],
};
