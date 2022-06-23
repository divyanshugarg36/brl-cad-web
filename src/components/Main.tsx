import { particleOptions } from '@constants';
import Link from 'next/link';
import React from 'react';
import Particles, { } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { Button } from './common';

interface IProps { }

export const Main: React.FC<IProps> = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <main>
      <div className="main-container">
        <h1><span>BRL</span><span>-</span><span>CAD</span></h1>
        <p>Think • Invent • Create</p>
        <Button>Contribute</Button>
      </div>
      <Particles
        width="100%"
        height="100%"
        init={particlesInit}
        canvasClassName="particles"
        options={particleOptions}
      />

    </main>
  );
};
