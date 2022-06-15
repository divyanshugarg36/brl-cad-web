import React from 'react';
import { Translation } from 'react-i18next';

export const NAVIGATION_DATA = [
  { title: <Translation>{(t) => t('NAVIGATION.DOWNLOAD')}</Translation>, value: 'https://github.com/BRL-CAD/brlcad' },
  { title: <Translation>{(t) => t('NAVIGATION.NEWS')}</Translation>, value: 'https://www.facebook.com/BRL-CAD-387112738872/' },
  { title: <Translation>{(t) => t('NAVIGATION.ABOUT')}</Translation>, value: 'https://en.wikipedia.org/wiki/BRL-CAD' },
  { title: <Translation>{(t) => t('NAVIGATION.DOCS')}</Translation>, value: 'https://brlcad.org/wiki/' },
  { title: <Translation>{(t) => t('NAVIGATION.SUPPORT')}</Translation>, value: 'https://github.com/BRL-CAD/brlcad/issues' },
  { title: <Translation>{(t) => t('NAVIGATION.GALLERY')}</Translation>, value: 'https://brlcad.org/gallery/' },
];
