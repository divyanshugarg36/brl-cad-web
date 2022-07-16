import { classNames } from '@constants';
import { GithubIcon } from '@icons';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  className?: string
  title: string;
  description: string;
  link: string;
  isImage?: boolean;
}

export const ProjectCard: React.FC<IProps> = ({
  className, title, description, link, isImage,
}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('project-card', className)}>
      <div className="project-card-body">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href={link}>
          <a target="_blank">{t('PROJECT.VIEW_ALL')}</a>
        </Link>
      </div>
      {isImage && <GithubIcon />}
    </div>
  );
};

ProjectCard.defaultProps = {
  className: '',
  isImage: false,
};
