import { classNames, particleOptions } from '@constants';
import React from 'react';
import Particles, { } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

interface IProps {
  className?: string
  title: string;
}

export const PageHeader: React.FC<IProps> = ({
  className, title,
}) => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <main className={classNames('page-header', className)}>
      <div />
      <Particles
        width="100%"
        height="100%"
        init={particlesInit}
        canvasClassName="particles"
        options={particleOptions}
      />
      <h1>{title}</h1>
    </main>
  );
};

PageHeader.defaultProps = {
  className: '',
};
