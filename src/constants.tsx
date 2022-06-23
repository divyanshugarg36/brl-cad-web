import React, { ReactElement } from 'react';
import { Translation } from 'react-i18next';
import { IOptions, RecursivePartial } from 'tsparticles-engine';

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

export const particleOptions: RecursivePartial<IOptions> = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: '#FFFFFF',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
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
      value: { min: 5, max: 5 },
    },
  },
  detectRetina: true,
};

export const classNames = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');
