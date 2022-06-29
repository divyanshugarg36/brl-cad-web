import { classNames } from '@constants';
import { IconProps } from '@icons';
import React from 'react';

import { Button } from './Button';

interface IProps {
  className?: string
  Icon: React.FC<IconProps>;
  title: string;
  description: string;
  link?: string;
  linkName?: string;
}

export const FeatureBlock: React.FC<IProps> = ({
  className, Icon, title, description, link, linkName,
}) => (
  <div className={classNames('feature', className)}>
    <div className="feature-icon">
      <Icon />
    </div>
    <h1>{title}</h1>
    <p>{description}</p>
    {(link || linkName) && (
      <Button
        elementType="a"
        href={`${link}`}
        className="main-button brl-button--small brl-button--reverse"
        target="_blank"
      >
        {linkName}
      </Button>
    )}
  </div>
);

FeatureBlock.defaultProps = {
  className: '',
  link: '',
  linkName: '',
};
