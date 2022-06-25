import { classNames } from '@constants';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  className?: string
  elementType?: string
  href?: LinkProps['href'];
  target?: string
}

export const Button: React.FC<IProps> = ({
  children, className, elementType, href = '', ...props
}) => {
  const Element = elementType as 'button' | 'a';
  const LinkElement = href ? Link : React.Fragment;
  return (
    <LinkElement href={href}>
      <Element type="button" className={classNames('brl-button', className)} {...props}>{children}</Element>
    </LinkElement>
  );
};
Button.defaultProps = {
  className: '',
  elementType: 'button',
  href: '',
  target: '',
};
