import { ABOUT_US } from '@constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AboutBlock } from './common';

interface IProps { }

export const AboutUs: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="about-us">
      <h1 className="about-us-heading">{t('ABOUT.TITLE')}</h1>
      <div className="about-us-body">
        {ABOUT_US(t).map(({
          image, fullTitle, title, description,
        }) => (
          <AboutBlock
            key={title}
            image={image}
            title={title}
            fullTitle={fullTitle}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
