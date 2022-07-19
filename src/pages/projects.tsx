import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { PageHeader, ProjectCard } from '../components/common';
import projects from '../projects.json';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('TITLE')}</title>
      </Head>
      <PageHeader title={t('PROJECT.TITLE')} />
      <div className="projects-body">
        {projects.map(({ title, description, link }) => (
          <ProjectCard
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
