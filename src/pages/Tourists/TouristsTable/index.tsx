import type { FC } from 'react';

import TouristsTableHead from './TouristsTableHead';
import TouristsTableItem from './TouristsTableItem';
import type { Tourists } from '../types';

interface TouristsTableProps {
  currentPage: number;
  tourists: Tourists[];
}

const TouristsTable: FC<TouristsTableProps> = ({ currentPage, tourists }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto overflow-scroll w-full border-collapse ">
        <TouristsTableHead />
        <tbody>
          {tourists.map((item, idx) => (
            <TouristsTableItem
              key={item.id}
              {...item}
              index={currentPage > 1 ? (currentPage - 1) * 10 + idx : idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsTable;
