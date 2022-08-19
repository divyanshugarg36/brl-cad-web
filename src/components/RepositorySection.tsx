import { LINKS } from '@constants';
import { GithubIcon } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import projects from '../repositories.json';
import { Button, RepositoryCard } from './common';

interface IProps { }

export const RepositorySection: React.FC<IProps> = () => {
  const { t } = useTranslation();
  return (
    <section className="repository-section">
      <div className="repository-main">
        <Image className="repository-main-image" src="https://github.com/BRL-CAD.png" height={500} width={500} layout="fixed" />
        <div className="repository-main-body">
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
      <div className="repository-section-list">
        {projects.slice(0, 2).map(({ title, description, link }) => (
          <RepositoryCard
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
        href="/repositories"
      >
        {t('PROJECT.BUTTON')}
      </Button>
    </section>
  );
};