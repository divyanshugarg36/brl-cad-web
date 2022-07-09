import { LINKS } from '@constants';
import { GithubIcon } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ProjectCard } from './common';

interface IProps { }

export const ProjectSection: React.FC<IProps> = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('ABOUT.ABOUT_1.TITLE'),
      description: t('ABOUT.ABOUT_1.DESCRIPTION'),
    },
    {
      title: t('ABOUT.ABOUT_2.TITLE'),
      description: t('ABOUT.ABOUT_2.DESCRIPTION'),
    },
  ];

  return (
    <section className="project-section">
      <div className="project-main">
        <Image className="project-main-image" src="https://github.com/BRL-CAD.png" height={500} width={500} layout="fixed" />
        <div className="project-main-body">
          <h1>Our Projects</h1>
          <p>
            BRL-CAD is a powerful cross-platform open source combinatorial
            solid modeling system that includes an interactive 3D solid geometry
            editor, a network-distributed symmetric multiprocessing (SMP)
            high-performance ray-tracer with support for rendering and geometric
            analysis, image and signal-processing tools, a system performance
            analysis benchmark suite, a flexible geometry scripting interface,
            and a high-performance geometric representation and analysis library.
          </p>
          <Link href={LINKS.GITHUB}>
            <a>
              <GithubIcon />
            </a>
          </Link>
        </div>
      </div>
      <div className="project-section-list">
        {projects.map(({ title, description }) => (
          <ProjectCard title={title} description={description} />
        ))}
      </div>
      <Button className="brl-button--small brl-button--reverse">View All</Button>
    </section>
  );
};
