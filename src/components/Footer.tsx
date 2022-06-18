import { ConstantData, NAVIGATION_DATA } from '@constants';
import {
  FacebookIcon, LinkedInIcon, TwitterIcon, YoutubeIcon,
} from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { BrlLogo } from '../assets/images';

interface IProps { }

export const Footer: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const FIRST_THREE = NAVIGATION_DATA.slice(0, 3);
  const LAST_THREE = NAVIGATION_DATA.slice(3);

  const footerLinks = (links: ConstantData[]) => (
    <ul>
      {links.map((item) => (
        <Link
          key={item.value}
          href={item.value}
        >
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );

  return (
    <footer>
      <div className="footer-link-section">
        {footerLinks(FIRST_THREE)}
        <div className="footer-logo">
          <Image src={BrlLogo.src} alt="BRL-CAD" width={72} height={72} />
        </div>
        {footerLinks(LAST_THREE)}
      </div>
      <div className="footer-social">
        <Link href=""><a><TwitterIcon /></a></Link>
        <Link href=""><a><LinkedInIcon /></a></Link>
        <Link href=""><a><FacebookIcon /></a></Link>
        <Link href=""><a><YoutubeIcon /></a></Link>
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
