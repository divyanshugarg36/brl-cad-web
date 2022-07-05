import { ConstantData, NAVIGATION_DATA, SOCIAL_DATA } from '@constants';
import {
  FacebookIcon, LinkedInIcon, TwitterIcon, YoutubeIcon,
} from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { brlLogo } from '../assets/images';

interface IProps { }

export const Footer: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const FIRST_THREE = NAVIGATION_DATA.slice(0, 3);
  const LAST_THREE = NAVIGATION_DATA.slice(3);

  const footerLinks = (links: ConstantData[]) => (
    <ul>
      {links.map((item) => (
        <li key={item.value}>
          <Link href={item.value}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer>
      <div className="footer-link-section">
        {footerLinks(FIRST_THREE)}
        <Link href="/">
          <a className="footer-logo">
            <Image src={brlLogo.src} alt="BRL-CAD" width={72} height={72} />
          </a>
        </Link>
        {footerLinks(LAST_THREE)}
      </div>
      <div className="footer-social">
        {SOCIAL_DATA.map((item) => {
          const Icon = {
            facebook: FacebookIcon,
            linkedin: LinkedInIcon,
            twitter: TwitterIcon,
            youtube: YoutubeIcon,
          }[item.title as 'facebook' | 'linkedin' | 'twitter' | 'youtube'];
          return (
            <Link key={item.value} href={item.value}><a><Icon /></a></Link>
          );
        })}
      </div>
      <Link href="https://bestpractices.coreinfrastructure.org/projects/66">
        <a className="footer-practices">
          <Image alt="best practices" src="https://bestpractices.coreinfrastructure.org/projects/66/badge" height={20} width={184} />
        </a>
      </Link>
      <div className="footer-copyright">
        <h2>{t('FOOTER.TITLE')}</h2>
        <p>{t('FOOTER.DESCRIPTION')}</p>
      </div>
    </footer>
  );
};
