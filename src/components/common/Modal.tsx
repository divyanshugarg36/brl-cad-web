import { classNames } from '@constants';
import { useModalScroll } from '@hooks';
import { CrossIcon } from '@icons';
import React from 'react';

import { Button } from './Button';
import { ClientOnlyPortal } from './ClientOnlyPortal.common';

interface IProps {
  className?: string
  title: string;
  children: any;
  onClose: () => void;
}

export const Modal: React.FC<IProps> = ({
  className, title, children, onClose,
}) => {
  useModalScroll(true);
  return (
    <ClientOnlyPortal selector="body">
      <div className={classNames('modal', className)}>
        <div className="modal-header">
          <h1>{title}</h1>
          <Button className="brl-button--reverse" onClick={onClose}><CrossIcon /></Button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </ClientOnlyPortal>
  );
};

Modal.defaultProps = {
  className: '',
};
