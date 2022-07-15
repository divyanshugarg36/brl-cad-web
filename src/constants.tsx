import React, { ReactElement } from 'react';
import { Translation } from 'react-i18next';

export interface ConstantData {
  title: string | ReactElement;
  value: string;
}

export const NAVIGATION_DATA: ConstantData[] = [
  { title: <Translation>{(t) => t('NAVIGATION.DOWNLOAD')}</Translation>, value: 'https://github.com/BRL-CAD/brlcad' },
  { title: <Translation>{(t) => t('NAVIGATION.NEWS')}</Translation>, value: 'https://www.facebook.com/BRL-CAD-387112738872/' },
  { title: <Translation>{(t) => t('NAVIGATION.ABOUT')}</Translation>, value: 'https://en.wikipedia.org/wiki/BRL-CAD' },
  { title: <Translation>{(t) => t('NAVIGATION.DOCS')}</Translation>, value: 'https://brlcad.org/wiki/' },
  { title: <Translation>{(t) => t('NAVIGATION.SUPPORT')}</Translation>, value: 'https://github.com/BRL-CAD/brlcad/issues' },
  { title: <Translation>{(t) => t('NAVIGATION.GALLERY')}</Translation>, value: 'https://brlcad.org/gallery/' },
];

export const SOCIAL_DATA: ConstantData[] = [
  { title: 'facebook', value: 'https://www.facebook.com/pages/BRL-CAD/387112738872' },
  { title: 'twitter', value: 'https://twitter.com/brl_cad' },
  { title: 'linkedin', value: 'https://www.linkedin.com/in/brlcad' },
  { title: 'youtube', value: 'https://www.youtube.com/results?search_query=brl+-+cad' },
];

export const BEST_PRACTICES = {
  HREF: 'https://bestpractices.coreinfrastructure.org/projects/66',
  IMAGE: 'https://bestpractices.coreinfrastructure.org/projects/66/badge',
};
