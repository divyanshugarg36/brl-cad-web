import { classNames } from '@constants';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: React.FC<IProps> = ({ children, className }) => (
  <button type="button" className={classNames('brl-button', className)}>{children}</button>
);

Button.defaultProps = {
  className: '',
};
