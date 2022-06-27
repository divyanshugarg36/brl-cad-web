import { LINKS, particleOptions } from '@constants';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Particles, { } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { Button } from './common';

interface IProps { }

export const Main: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <main>
      <Particles
        width="100%"
        height="100%"
        init={particlesInit}
        canvasClassName="particles"
        options={particleOptions}
      />
      <div className="main-container">
        <h1>
          <Trans i18nKey="MAIN.TITLE">
            -
            <span />
            -
          </Trans>
        </h1>
        <p>{t('MAIN.TAG')}</p>
        <Button
          elementType="a"
          href={LINKS.IRC_LINK}
          className="main-button"
          target="_blank"
        >
          {t('MAIN.BUTTON')}
        </Button>
      </div>

    </main>
  );
};
