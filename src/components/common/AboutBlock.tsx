import { classNames } from '@constants';
import Image, { StaticImageData } from 'next/legacy/image';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import { Modal } from './Modal';

interface IProps {
  className?: string
  title: string;
  fullTitle: string;
  description: string;
  image: StaticImageData;
}

export const AboutBlock: React.FC<IProps> = ({
  className, title, fullTitle, image, description,
}) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={classNames('about', className)}>
      <Image
        src={image.src}
        alt={fullTitle}
        width={200}
        height={200}
        layout="responsive"
        objectFit="cover"
      />
      <h1 role="presentation" onClick={() => setIsModal((isModal) => !isModal)}>{title}</h1>
      {isModal && (
        <Modal title={fullTitle} onClose={() => setIsModal((isModal) => !isModal)}>
          {/*
            The elements are supposed to be in this way because
            this is the most redundant way of mapping i18n text with actual JSX elements.
          */}
          <Trans i18nKey={description}>
            -
            <p>
              <b />
            </p>
            <ul>
              <li />
            </ul>
            -
          </Trans>
        </Modal>
      )}
    </div>
  );
};

AboutBlock.defaultProps = {
  className: '',
};
