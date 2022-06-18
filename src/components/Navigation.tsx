import { NAVIGATION_DATA } from '@constants';
import { useOutside } from '@hooks';
import { NavHamburgerIcon } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BrlLogo } from '../assets/images';

interface IProps { }

export const Navigation: React.FC<IProps> = () => {
  const [isOpen, setIsOpen, navContainer] = useOutside(false);
  return (
    <nav ref={navContainer}>
      <Link href="/">
        <a className="nav-icon">
          <Image src={BrlLogo.src} alt="BRL-CAD" width={48} height={48} />
          <h1>BRL-CAD</h1>
        </a>
      </Link>
      <ul className="nav-links" data-open={isOpen}>
        {NAVIGATION_DATA.map((item) => (
          <li>
            <Link
              key={item.value}
              href={item.value}
            >
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <NavHamburgerIcon />
      </button>
    </nav>
  );
};
