import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useMemo, useState } from 'react';
import type { FC, MouseEvent } from 'react';

import Flexer from '@/components/Flexer';
import Dropdown from '@/components/Dropdown';

import { Tourists } from '../types';

interface TouristsTableItemProps extends Tourists {
  index: number;
}

const TouristsTableItem: FC<TouristsTableItemProps> = ({
  id,
  index,
  tourist_profilepicture,
  tourist_location,
  tourist_email,
  tourist_name,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const navigate = useNavigate();

  const dropdownMenu = useMemo(
    () => [
      { id: 1, name: 'Edit', onClick: () => {} },
      { id: 2, name: 'Delete', onClick: () => {} },
    ],
    []
  );

  const handleThreedots = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  return (
    <tr
      className=" hover:bg-gray-200 cursor-pointer"
      onClick={() => navigate(`/tourists/${id}`)}
    >
      <td className="py-4 px-3 border border-gray-300">{index + 1}</td>
      <td className="py-4 px-3 border border-gray-300">
        <Flexer className="items-center gap-2 col-span-4">
          <div className="w-10 h-10 rounded-full">
            <img
              src={tourist_profilepicture}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="font-bold">{tourist_name}</div>
        </Flexer>
      </td>
      <td className="py-4 px-3 border border-gray-300">
        <div className="col-span-3 font-semibold text-gray-500">
          {tourist_email}
        </div>
      </td>
      <td className="py-4 px-3 border border-r-0 border-gray-300">
        <div className="col-span-3 font-semibold text-gray-500">
          {tourist_location}
        </div>
      </td>
      <td className="py-4 px-3 border border-l-0 border-gray-300">
        <div
          className="relative w-min rounded-full hover:bg-gray-400"
          onClick={handleThreedots}
        >
          <BsThreeDotsVertical
            size={14}
            className="w-6 h-6 text-gray-500 cursor-pointer "
          />
          {openDropdown && <Dropdown menu={dropdownMenu} />}
        </div>
      </td>
    </tr>
  );
};

export default TouristsTableItem;
