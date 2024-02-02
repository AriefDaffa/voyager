import { forwardRef } from 'react';
import type { HTMLProps } from 'react';

import type { DropdownMenu } from './types';

interface DropdownProps extends HTMLProps<HTMLDivElement> {
  menu: DropdownMenu[];
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ menu }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute border right-0 mt-3 bg-white rounded-md p-2 w-40 z-20 flex flex-col gap-1 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {menu.map((item) => (
        <div
          key={item.id}
          className="font-medium px-2 py-1 rounded-md hover:bg-gray-200"
          onClick={item.onClick}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
});

export default Dropdown;
