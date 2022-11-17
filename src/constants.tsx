import React, { ReactElement } from 'react';
import { TFunction, Translation } from 'react-i18next';
import { IOptions, RecursivePartial } from 'tsparticles-engine';

import {
  about1, about3, about4, since1979,
} from './assets/images';

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

export const LINKS = {
  GITHUB: 'https://github.com/BRL-CAD/brlcad',
  IRC_LINK: 'https://brlcad.zulipchat.com/',
  LEARN_MORE_PDF: 'https://brlcad.org/HACKING_BRL-CAD.pdf',
  WIKIPEDIA: 'https://en.wikipedia.org/wiki/BRL-CAD',
};

export const ABOUT_US = (t: TFunction) => [
  {
    image: about1,
    title: t('ABOUT.ABOUT_1.TITLE'),
    fullTitle: t('ABOUT.ABOUT_1.FULL_TITLE'),
    description: 'ABOUT.ABOUT_1.DESCRIPTION',
  },
  {
    image: since1979,
    title: t('ABOUT.ABOUT_2.TITLE'),
    fullTitle: t('ABOUT.ABOUT_2.FULL_TITLE'),
    description: 'ABOUT.ABOUT_2.DESCRIPTION',
  },
  {
    image: about3,
    title: t('ABOUT.ABOUT_3.TITLE'),
    fullTitle: t('ABOUT.ABOUT_3.FULL_TITLE'),
    description: 'ABOUT.ABOUT_3.DESCRIPTION',
  },
  {
    image: about4,
    title: t('ABOUT.ABOUT_4.TITLE'),
    fullTitle: t('ABOUT.ABOUT_4.FULL_TITLE'),
    description: 'ABOUT.ABOUT_4.DESCRIPTION',
  },
];

export const particleOptions: RecursivePartial<IOptions> = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'attract',
      },
      onHover: {
        enable: true,
        mode: 'trail',
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: '#FFFFFF',
    },
    links: {
      color: '#FFFFFF',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'outside',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      speed: 4,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 40,
      max: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: ['square', 'circle', 'triangle'],
    },
    size: {
      value: { min: 4, max: 6 },
    },
  },
  detectRetina: true,
};

export const classNames = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export const BEST_PRACTICES = {
  HREF: 'https://bestpractices.coreinfrastructure.org/projects/66',
  IMAGE: 'https://bestpractices.coreinfrastructure.org/projects/66/badge',
};
