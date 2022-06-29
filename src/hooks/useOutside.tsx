import {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';

type OutsideReturn = [
  value: boolean,
  setValue: (_: boolean) => void,
  ref: MutableRefObject<HTMLElement | undefined> | any
];

export const useOutside = (initial = false, callback = () => { }): OutsideReturn => {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | any) => {
      if (ref.current && !ref.current.contains(event?.target)) {
        setValue(false);
        callback();
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });

  return [value, setValue, ref];
};
