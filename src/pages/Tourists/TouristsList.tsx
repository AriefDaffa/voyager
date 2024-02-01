import { MdDelete, MdModeEdit } from 'react-icons/md';
import type { FC } from 'react';

import Flexer from '@/components/Flexer';

import { Tourists } from './types';

interface TouristsListProps {
  tourists: Tourists[];
}

const TouristsList: FC<TouristsListProps> = ({ tourists }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto overflow-scroll w-full border-collapse ">
        <thead>
          <tr className="text-left">
            <th className="py-4 px-3 bg-gray-200 border border-gray-300">
              No.
            </th>
            <th className="py-4 px-3 bg-gray-200 border border-gray-300">
              Name
            </th>
            <th className="py-4 px-3 bg-gray-200 border border-gray-300">
              Email
            </th>
            <th className="py-4 px-3 bg-gray-200 border border-gray-300">
              Location
            </th>
            <th className="py-4 px-3 bg-gray-200 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {tourists.map((item, idx) => (
            <tr key={item.id} className="hover:bg-gray-200 cursor-pointer">
              <td className="py-4 px-3 border border-gray-300">{idx + 1}</td>
              <td className="py-4 px-3 border border-gray-300">
                <Flexer className="items-center gap-2 col-span-4">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={item.tourist_profilepicture}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="font-bold">{item.tourist_name}</div>
                </Flexer>
              </td>
              <td className="py-4 px-3 border border-gray-300">
                <div className="col-span-3 font-semibold text-gray-500">
                  {item.tourist_email}
                </div>
              </td>
              <td className="py-4 px-3 border border-gray-300">
                <div className="col-span-3 font-semibold text-gray-500">
                  {item.tourist_location}
                </div>
              </td>
              <td className="py-4 px-3 border border-gray-300">
                <Flexer className="col-span-1 gap-2 justify-center">
                  <MdModeEdit className="w-6 h-6 text-gray-500 cursor-pointer" />
                  <MdDelete className="w-6 h-6 text-red-600 cursor-pointer" />
                </Flexer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsList;
