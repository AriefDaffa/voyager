import type { FC } from 'react';

import TouristsTableHead from './TouristsTableHead';
import TouristsTableItem from './TouristsTableItem';
import type { EditValArgs, Tourists } from '../types';

interface TouristsTableProps {
  currentPage: number;
  tourists: Tourists[];
  handleOpenModal: () => void;
  handleOpenDelete: () => void;
  handleEditVal: (val: EditValArgs) => void;
}

const TouristsTable: FC<TouristsTableProps> = ({
  currentPage,
  tourists,
  handleEditVal,
  handleOpenModal,
  handleOpenDelete,
}) => {
  return (
    <div className="overflow-x-auto md:overflow-x-visible">
      <table className="w-full border-collapse table-auto">
        <TouristsTableHead />
        <tbody>
          {tourists.map((item, idx) => (
            <TouristsTableItem
              key={item.id}
              {...item}
              index={currentPage > 1 ? (currentPage - 1) * 10 + idx : idx}
              handleEditVal={handleEditVal}
              handleOpenModal={handleOpenModal}
              handleOpenDelete={handleOpenDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsTable;
