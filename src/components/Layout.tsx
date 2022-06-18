import React from 'react';

import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);
