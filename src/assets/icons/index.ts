import React from 'react';

export { CrossIcon } from './Cross';
export { FacebookIcon } from './Facebook';
export { GithubIcon } from './Github';
export { HeartIcon } from './Heart';
export { LinkedInIcon } from './LinkedIn';
export { NavHamburgerIcon } from './NavHamburger';
export { OpenSourceIcon } from './OpenSource';
export { SolidModelingIcon } from './SolidModeling';
export { TwitterIcon } from './Twitter';
export { YoutubeIcon } from './Youtube';

export interface IconProps {
  onClick?: any;
  className?: string;
  style?: React.CSSProperties;
  [keys: string]: any
}
