import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Main } from '../components';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>BRL-CAD: Open Source Solid Modeling</title>
      </Head>
      <Main />
    </>
  );
};

export default Home;
