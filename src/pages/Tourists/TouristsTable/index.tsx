import type { FC } from 'react';

import TouristsTableHead from './TouristsTableHead';
import TouristsTableItem from './TouristsTableItem';
import TouristSkeleton from './TouristSkeleton';
import type { EditValArgs, Tourists } from '../types';

interface TouristsTableProps {
  currentPage: number;
  isLoading: boolean;
  tourists: Tourists[];
  handleOpenModal: () => void;
  handleOpenDelete: () => void;
  handleEditVal: (val: EditValArgs) => void;
}

const TouristsTable: FC<TouristsTableProps> = ({
  tourists,
  isLoading,
  currentPage,
  handleEditVal,
  handleOpenModal,
  handleOpenDelete,
}) => {
  return (
    <div className="overflow-x-auto md:overflow-x-visible">
      <table className="w-full border-collapse table-auto">
        <TouristsTableHead />
        <tbody>
          {!isLoading
            ? tourists.map((item, idx) => (
                <TouristsTableItem
                  key={item.id}
                  {...item}
                  index={currentPage > 1 ? (currentPage - 1) * 10 + idx : idx}
                  handleEditVal={handleEditVal}
                  handleOpenModal={handleOpenModal}
                  handleOpenDelete={handleOpenDelete}
                />
              ))
            : Array.from(Array(10)).map((_, i) => <TouristSkeleton key={i} />)}
        </tbody>
      </table>
    </div>
  );
};

export default TouristsTable;
