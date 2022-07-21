import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import {
  AboutUs, Features, Highlights, Information, Main, ProjectSection,
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
      <ProjectSection />
    </>
  );
};

export default Home;
