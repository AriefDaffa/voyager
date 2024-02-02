import type { FC } from 'react';

interface TouristsTableHeadProps {}

const TouristsTableHead: FC<TouristsTableHeadProps> = () => {
  return (
    <thead>
      <tr className="text-left">
        <th className="py-4 px-3 bg-primary text-white  rounded-tl-lg border-white">
          No.
        </th>
        <th className="py-4 px-3 bg-primary text-white border border-white">
          Name
        </th>
        <th className="py-4 px-3 bg-primary text-white border border-white">
          Email
        </th>
        <th className="py-4 px-3 bg-primary text-white border border-r-0 border-white">
          Location
        </th>
        <th className="py-4 px-3 bg-primary text-white border border-l-0 border-white rounded-tr-lg"></th>
      </tr>
    </thead>
  );
};

export default TouristsTableHead;
