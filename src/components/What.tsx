import React from 'react';
import { useTranslation } from 'react-i18next';

interface IProps { }

export const What: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="what">
      <h1>{t('WHAT.TITLE')}</h1>
      <p>{t('WHAT.DESCRIPTION')}</p>
    </section>
  );
};
