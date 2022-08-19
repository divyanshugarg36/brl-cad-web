import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { PageHeader, RepositoryCard } from '../components/common';
import projects from '../repositories.json';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('TITLE')}</title>
      </Head>
      <PageHeader title={t('PROJECT.TITLE')} />
      <div className="repository-body">
        {projects.map(({ title, description, link }) => (
          <RepositoryCard
            key={title}
            title={title}
            description={description}
            link={link}
            isImage
          />
        ))}
      </div>
    </>
  );
};

export default Home;
