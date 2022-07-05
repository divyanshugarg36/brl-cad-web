import { LINKS } from '@constants';
import { HeartIcon, OpenSourceIcon, SolidModelingIcon } from '@icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FeatureBlock } from './common';

interface IProps { }

export const Features: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const features = [
    {
      index: 1,
      Icon: OpenSourceIcon,
      title: t('FEATURES.FEATURE_1.TITLE'),
      description: t('FEATURES.FEATURE_1.DESCRIPTION'),
    },
    {
      index: 2,
      Icon: HeartIcon,
      title: t('FEATURES.FEATURE_2.TITLE'),
      description: t('FEATURES.FEATURE_2.DESCRIPTION'),
      linkName: t('FEATURES.FEATURE_2.BUTTON'),
      link: LINKS.LEARN_MORE_PDF,
    },
    {
      index: 3,
      Icon: SolidModelingIcon,
      title: t('FEATURES.FEATURE_3.TITLE'),
      description: t('FEATURES.FEATURE_3.DESCRIPTION'),
    },
  ];
  return (
    <section className="features">
      {features.map(({
        Icon, description, title, linkName, link,
      }) => (
        <FeatureBlock
          key={title}
          Icon={Icon}
          title={title}
          description={description}
          linkName={linkName || ''}
          link={link || ''}
        />
      ))}
    </section>
  );
};
