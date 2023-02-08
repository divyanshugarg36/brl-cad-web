import { classNames } from '@constants';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Button } from './Button';

interface IProps {
  className?: string
  image: StaticImageData;
  title: string;
  description: string;
  link?: string;
  linkName?: string;
  isReverse?: boolean
}

export const HighlightBlock: React.FC<IProps> = ({
  className, image, title, description, link, linkName, isReverse,
}) => (
  <div className={classNames('highlight', isReverse && 'highlight--reverse', className)}>
    <div className="highlight-image">
      <Image src={image.src} layout="responsive" width={16} height={9} alt={title} />
    </div>
    <div className="highlight-content">
      <h1>{title}</h1>
      <p>{description}</p>
      {(link || linkName) && (
        <Button
          elementType="a"
          href={`${link}`}
          className="main-button brl-button--small brl-button--reverse"
          target="_blank"
          aria-label="some more descriptive text that explains the link"
        >
          {linkName}
        </Button>
      )}
    </div>
  </div>
);
HighlightBlock.defaultProps = {
  className: '',
  link: '',
  linkName: '',
  isReverse: false,
};
