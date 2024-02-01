import type { FC } from 'react';

import TouristsTableHead from './TouristsTableHead';
import TouristsTableItem from './TouristsTableItem';
import type { Tourists } from '../types';

interface TouristsTableProps {
  tourists: Tourists[];
}

const TouristsTable: FC<TouristsTableProps> = ({ tourists }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto overflow-scroll w-full border-collapse ">
        <TouristsTableHead />
        <tbody>
          {tourists.map((item, idx) => (
            <TouristsTableItem key={item.id} {...item} index={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsTable;
