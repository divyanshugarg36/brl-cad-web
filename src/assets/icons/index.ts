import React from 'react';

export { FacebookIcon } from './Facebook';
export { LinkedInIcon } from './LinkedIn';
export { NavHamburgerIcon } from './NavHamburger';
export { TwitterIcon } from './Twitter';
export { YoutubeIcon } from './Youtube';

export interface IconProps {
  onClick?: any;
  className?: string;
  style?: React.CSSProperties;
  [keys: string]: any
}
