import type { FC } from 'react';

interface TouristsTableHeadProps {}

const TouristsTableHead: FC<TouristsTableHeadProps> = () => {
  return (
    <thead>
      <tr className="text-left">
        <th className="py-4 px-3 bg-gray-200 border border-gray-300">No.</th>
        <th className="py-4 px-3 bg-gray-200 border border-gray-300">Name</th>
        <th className="py-4 px-3 bg-gray-200 border border-gray-300">Email</th>
        <th className="py-4 px-3 bg-gray-200 border border-r-0 border-gray-300">
          Location
        </th>
        <th className="py-4 px-3 bg-gray-200 border border-l-0 border-gray-300"></th>
      </tr>
    </thead>
  );
};

export default TouristsTableHead;
