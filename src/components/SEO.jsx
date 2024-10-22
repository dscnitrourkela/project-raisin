import Head from 'next/head';

const SEO = ({ title, description, ogImage, ogUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={ogUrl} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export default SEO;
