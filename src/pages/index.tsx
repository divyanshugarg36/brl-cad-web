import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import {
  AboutUs, Features, Highlights, Information, Main, RepositorySection,
} from '../components';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('TITLE')}</title>
      </Head>
      <Main />
      <Features />
      <Information />
      <Highlights />
      <AboutUs />
      <RepositorySection />
    </>
  );
};

export default Home;
