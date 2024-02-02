import type { FC } from 'react';

import TouristsTableHead from './TouristsTableHead';
import TouristsTableItem from './TouristsTableItem';
import type { EditValArgs, Tourists } from '../types';

interface TouristsTableProps {
  currentPage: number;
  tourists: Tourists[];
  handleEditVal: (val: EditValArgs) => void;
  handleOpenModal: () => void;
}

const TouristsTable: FC<TouristsTableProps> = ({
  currentPage,
  tourists,
  handleEditVal,
  handleOpenModal,
}) => {
  return (
    <div className="">
      <table className="table-auto w-full border-collapse ">
        <TouristsTableHead />
        <tbody>
          {tourists.map((item, idx) => (
            <TouristsTableItem
              key={item.id}
              {...item}
              index={currentPage > 1 ? (currentPage - 1) * 10 + idx : idx}
              handleEditVal={handleEditVal}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsTable;
