import { NAVIGATION_DATA } from '@constants';
import { useOutside } from '@hooks';
import { NavHamburger } from '@icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BrlLogo } from '../assets/images';

interface IProps { }

export const Navigation: React.FC<IProps> = () => {
  const [isOpen, setIsOpen, navContainer] = useOutside(false);
  return (
    <nav ref={navContainer}>
      <button type="button" className="nav-icon">
        <Image src={BrlLogo.src} alt="BRL-CAD" width={48} height={48} />
        <h1>BRL-CAD</h1>
      </button>
      <ul className="nav-links" data-open={isOpen}>
        {NAVIGATION_DATA.map((item) => (<Link href={item.value}><li>{item.title}</li></Link>))}
      </ul>
      <button type="button" className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <NavHamburger />
      </button>
    </nav>
  );
};
