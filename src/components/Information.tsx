import React from 'react';
import { useTranslation } from 'react-i18next';

interface IProps { }

export const Information: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="information">
      <h1>{t('INFORMATION.TITLE')}</h1>
      <p>{t('INFORMATION.DESCRIPTION')}</p>
    </section>
  );
};
