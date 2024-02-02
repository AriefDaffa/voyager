import type { FC } from 'react';

import type { DropdownMenu } from './types';

interface DropdownProps {
  menu: DropdownMenu[];
}

const Dropdown: FC<DropdownProps> = ({ menu }) => {
  return (
    <div className="absolute border right-0 mt-3 bg-white rounded-md p-2 w-40 z-20 flex flex-col gap-1">
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
};

export default Dropdown;
