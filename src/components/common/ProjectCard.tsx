import { classNames } from '@constants';
import { GithubIcon } from '@icons';
import React from 'react';

interface IProps {
  className?: string
  title: string;
  description: string;
  isImage?: boolean;
}

export const ProjectCard: React.FC<IProps> = ({
  className, title, description, isImage,
}) => (
  <div className={classNames('project-card', className)}>
    <div className="project-card-body">
      <h1>{title}</h1>
      <p>{description}</p>
      <a>Visit Github</a>
    </div>
    {isImage && <GithubIcon />}
  </div>
);

ProjectCard.defaultProps = {
  className: '',
  isImage: false,
};
