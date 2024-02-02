import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useMemo, useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import type { FC, MouseEvent } from 'react';

import Flexer from '@/components/Flexer';
import Dropdown from '@/components/Dropdown';

import { EditValArgs, Tourists } from '../types';

interface TouristsTableItemProps extends Tourists {
  index: number;
  handleEditVal: (val: EditValArgs) => void;
  handleOpenModal: () => void;
  handleOpenDelete: () => void;
}

const TouristsTableItem: FC<TouristsTableItemProps> = ({
  id,
  index,
  tourist_profilepicture,
  tourist_location,
  tourist_email,
  tourist_name,
  handleEditVal,
  handleOpenModal,
  handleOpenDelete,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const navigate = useNavigate();

  const ref = useClickOutside(() => setOpenDropdown(false));

  const dropdownMenu = useMemo(
    () => [
      {
        id: 1,
        name: <div>Edit</div>,
        onClick: () => {
          handleOpenModal();
          handleEditVal({
            email: tourist_email,
            name: tourist_name,
            location: tourist_location,
            id,
          });
        },
      },
      {
        id: 2,
        name: <div>Delete</div>,
        onClick: () => {
          handleOpenDelete();
          handleEditVal({
            email: tourist_email,
            name: tourist_name,
            location: tourist_location,
            id,
          });
        },
      },
    ],
    [
      handleEditVal,
      handleOpenDelete,
      handleOpenModal,
      id,
      tourist_email,
      tourist_location,
      tourist_name,
    ]
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
      <td className={`py-4 px-3 border border-gray-300`}>{index + 1}</td>
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
          className="relative w-min rounded-lg p-2 float-right hover:bg-gray-300"
          onClick={handleThreedots}
        >
          <BsThreeDotsVertical
            size={14}
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
          {openDropdown && <Dropdown menu={dropdownMenu} ref={ref} />}
        </div>
      </td>
    </tr>
  );
};

export default TouristsTableItem;
