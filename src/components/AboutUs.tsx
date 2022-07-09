import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  about1, about3, about4, since1979,
} from '../assets/images';
import { AboutBlock } from './common';

interface IProps { }

export const AboutUs: React.FC<IProps> = () => {
  const { t } = useTranslation();

  const aboutUs = [
    {
      image: about1,
      title: t('ABOUT.ABOUT_1.TITLE'),
      fullTitle: t('ABOUT.ABOUT_1.FULL_TITLE'),
      description: t('ABOUT.ABOUT_1.DESCRIPTION'),
    },
    {
      image: since1979,
      title: t('ABOUT.ABOUT_2.TITLE'),
      fullTitle: t('ABOUT.ABOUT_2.FULL_TITLE'),
      description: t('ABOUT.ABOUT_2.DESCRIPTION'),
    },
    {
      image: about3,
      title: t('ABOUT.ABOUT_3.TITLE'),
      fullTitle: t('ABOUT.ABOUT_3.FULL_TITLE'),
      description: t('ABOUT.ABOUT_3.DESCRIPTION'),
    },
    {
      image: about4,
      title: t('ABOUT.ABOUT_4.TITLE'),
      fullTitle: t('ABOUT.ABOUT_4.FULL_TITLE'),
      description: t('ABOUT.ABOUT_4.DESCRIPTION'),
    },
  ];

  return (
    <section className="about-us">
      <h1 className="about-us-heading">{t('ABOUT.TITLE')}</h1>
      <div className="about-us-body">
        {aboutUs.map(({
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
