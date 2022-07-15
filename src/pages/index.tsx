import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>BRL-CAD: Open Source Solid Modeling</title>
      </Head>
      <div>
        <p>{t('TITLE')}</p>
        <p>Content</p>
      </div>
    </>
  );
};

export default Home;
