import * as React from 'react';

import { IconProps } from '.';

export const NavHamburger = (props: IconProps) => (
  <svg
    width={18}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.562 1.5h16.876c.31 0 .562-.336.562-.75S17.748 0 17.437 0H.563C.252 0 0 .336 0 .75s.252.75.562.75ZM17.438 5.25H.561C.252 5.25 0 5.586 0 6s.252.75.562.75h16.876c.31 0 .562-.336.562-.75s-.252-.75-.563-.75ZM17.438 10.5H6.188c-.311 0-.563.336-.563.75s.252.75.562.75h11.25c.311 0 .563-.336.563-.75s-.252-.75-.563-.75Z"
      fill="#666"
    />
  </svg>
);
