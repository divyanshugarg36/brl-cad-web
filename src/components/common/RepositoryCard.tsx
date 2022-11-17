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

export const RepositoryCard: React.FC<IProps> = ({
  className, title, description, link, isImage,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('repository-card', className)}>
      <div className="repository-card-body">
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

RepositoryCard.defaultProps = {
  className: '',
  isImage: false,
};
