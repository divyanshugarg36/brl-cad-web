import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BrlLogo } from '../assets/images';

interface IProps { }

export const Navigation: React.FC<IProps> = () => (
  <nav>
    <button type="button">
      <Image src={BrlLogo.src} alt="BRL-CAD" width={48} height={48} />
      <h1>BRL-CAD</h1>
    </button>
    <ul>
      <li><Link href="/">Link 1</Link></li>
      <li><Link href="/">Link 2</Link></li>
      <li><Link href="/">Link 3</Link></li>
      <li><Link href="/">Link 4</Link></li>
    </ul>
  </nav>
);
