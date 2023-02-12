import Image from 'next/legacy/image';
import React from 'react';

import { brlLogo } from '../../assets/images';

type LogoSize = 'md' | 'lg'

interface IProps {
  size: LogoSize
}

export const BrlLogo: React.FC<IProps> = ({ size }) => {
  const sizeObject = { md: 48, lg: 64 }[size];

  return (
    <Image
      src={brlLogo.src}
      alt="BRL-CAD"
      width={sizeObject}
      height={sizeObject}
    />
  );
};
