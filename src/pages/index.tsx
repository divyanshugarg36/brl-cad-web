import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>BRL-CAD</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{t('TITLE')}</p>
    </div>
  );
};

export default Home;
