import React from 'react';

import { Navigation } from './Navigation';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <Navigation />
    {children}
    <div>Footer</div>
  </>
);
