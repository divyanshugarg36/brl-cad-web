import { LINKS } from '@constants';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from './common';

interface IProps { }

export const GetInvolved: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="get-involved">
      <p>
        <Trans i18nKey="GET_INVOLVED.TITLE">
          BRL-CAD is <span>backed by open</span> source community
        </Trans>
      </p>
      <Button
        elementType="a"
        className="brl-button--small"
        href={LINKS.IRC_LINK}
        target="_blank"
      >
        {t('GET_INVOLVED.BUTTON')}
      </Button>
    </div>
  );
};
