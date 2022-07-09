import { LINKS } from '@constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  crossPlatfom, freeOpen, since1979, trustedMilitary,
} from '../assets/images';
import { HighlightBlock } from './common';

interface IProps { }

export const Highlights: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      image: crossPlatfom,
      title: t('HIGHLIGHTS.HIGHLIGHT_1.TITLE'),
      description: t('HIGHLIGHTS.HIGHLIGHT_1.DESCRIPTION'),
    },
    {
      image: trustedMilitary,
      title: t('HIGHLIGHTS.HIGHLIGHT_2.TITLE'),
      description: t('HIGHLIGHTS.HIGHLIGHT_2.DESCRIPTION'),
    },
    {
      image: since1979,
      title: t('HIGHLIGHTS.HIGHLIGHT_3.TITLE'),
      description: t('HIGHLIGHTS.HIGHLIGHT_3.DESCRIPTION'),
      linkName: t('HIGHLIGHTS.HIGHLIGHT_3.BUTTON'),
      link: LINKS.WIKIPEDIA,
    },
    {
      image: freeOpen,
      title: t('HIGHLIGHTS.HIGHLIGHT_4.TITLE'),
      description: t('HIGHLIGHTS.HIGHLIGHT_4.DESCRIPTION'),
    },
  ];
  return (
    <section className="highlights">
      <h1 className="highlights-heading">{t('HIGHLIGHTS.TITLE')}</h1>
      <div>
        {highlights.map(({
          description, title, link, linkName, image,
        }, index) => (
          <HighlightBlock
            key={title}
            isReverse={!!(index % 2)}
            title={title}
            description={description}
            image={image}
            link={link}
            linkName={linkName}
          />
        ))}
      </div>
    </section>
  );
};
