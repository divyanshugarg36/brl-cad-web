import { useEffect } from 'react';

export const useModalScroll = (isScroll: boolean, callback: (_: boolean) => void = () => { }) => {
  useEffect(() => {
    if (isScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    callback(isScroll);
    return () => {
      document.body.style.overflow = '';
    };
  }, [isScroll]);
};
