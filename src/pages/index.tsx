import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Features, Main } from '../components';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('TITLE')}</title>
      </Head>
      <Main />
      <Features />
    </>
  );
};

export default Home;
