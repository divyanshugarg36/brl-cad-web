import {
  BEST_PRACTICES, ConstantData, NAVIGATION_DATA, SOCIAL_DATA,
} from '@constants';
import {
  FacebookIcon, LinkedInIcon, TwitterIcon, YoutubeIcon,
} from '@icons';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { BrlLogo } from './common';

interface IProps { }

export const Footer: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const FIRST_THREE = NAVIGATION_DATA.slice(0, 3);
  const LAST_THREE = NAVIGATION_DATA.slice(3);
  const year = (new Date()).getFullYear();

  const footerLinks = (links: ConstantData[]) => (
    <ul>
      {links.map((item) => (
        <li key={item.value}>
          <Link href={item.value}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer>
      <div className="footer-link-section">
        {footerLinks(FIRST_THREE)}
        <Link className="footer-logo" href="/">
          <BrlLogo size="lg" />
        </Link>
        {footerLinks(LAST_THREE)}
      </div>
      <div className="footer-social">
        {SOCIAL_DATA(t).map((item) => {
          const Icon = {
            facebook: FacebookIcon,
            linkedin: LinkedInIcon,
            twitter: TwitterIcon,
            youtube: YoutubeIcon,
          }[item.title as 'facebook' | 'linkedin' | 'twitter' | 'youtube'];
          return (
            <Link
              key={item.value}
              href={item.value}
              target="_blank"
              aria-label={item.label as unknown as string}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
      <Link className="footer-practices" href={BEST_PRACTICES.HREF}>
        <Image alt="best practices" src={BEST_PRACTICES.IMAGE} height={20} width={184} />
      </Link>
      <div className="footer-copyright">
        <h2>{t('FOOTER.TITLE', { year })}</h2>
        <p>{t('FOOTER.DESCRIPTION')}</p>
      </div>
    </footer>
  );
};
