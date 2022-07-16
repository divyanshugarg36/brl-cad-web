import { LINKS } from '@constants';
import { GithubIcon } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import projects from '../projects.json';
import { Button, ProjectCard } from './common';

interface IProps { }

export const ProjectSection: React.FC<IProps> = () => {
  const { t } = useTranslation();
  return (
    <section className="project-section">
      <div className="project-main">
        <Image className="project-main-image" src="https://github.com/BRL-CAD.png" height={500} width={500} layout="fixed" />
        <div className="project-main-body">
          <h1>{t('PROJECT.TITLE')}</h1>
          <p>
            {t('PROJECT.DESCRIPTION')}
          </p>
          <Link href={LINKS.GITHUB}>
            <a>
              <GithubIcon />
            </a>
          </Link>
        </div>
      </div>
      <div className="project-section-list">
        {projects.slice(0, 2).map(({ title, description, link }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
      <Button
        elementType="a"
        className="brl-button--small brl-button--reverse"
        href="/projects"
      >
        {t('PROJECT.BUTTON')}
      </Button>
    </section>
  );
};
