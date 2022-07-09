import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: any;
  selector?: string;
}

export const ClientOnlyPortal: React.FC<IProps> = ({ children, selector = 'body' }) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, []);

  return (mounted && ref.current) ? createPortal(children, ref.current) : null;
};

ClientOnlyPortal.defaultProps = {
  selector: '#__next',
};
