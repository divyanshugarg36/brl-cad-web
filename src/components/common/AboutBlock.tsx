import { classNames } from '@constants';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

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
      <Image src={image.src} alt={fullTitle} width={200} height={200} layout="responsive" objectFit="cover" />
      <h1 role="presentation" onClick={() => setIsModal((isModal) => !isModal)}>{title}</h1>
      {isModal && (
        <Modal title={fullTitle} onClose={() => setIsModal((isModal) => !isModal)}>
          {description}
        </Modal>
      )}
    </div>
  );
};

AboutBlock.defaultProps = {
  className: '',
};
