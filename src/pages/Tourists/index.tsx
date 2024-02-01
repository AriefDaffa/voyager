import { useState } from 'react';
import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import Flexer from '@/components/Flexer';
import Modal from '@/components/Modal';
import dummyTourists from '@/data/tourists_data.json';

import TouristsHeader from './TouristsHeader';
import TouristsTable from './TouristsTable';
import TouristsModal from './TouristsModal';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handlePageChange = (val: number) => {
    setPage(val);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container className="px-2 h-screen pt-24 md:px-4">
      <Navbar />
      <TouristsHeader
        totalTourist={dummyTourists.totalrecord}
        handleOpenModal={handleOpenModal}
      />
      <TouristsTable tourists={dummyTourists.data} />
      <Flexer className="mt-2 justify-center">
        <Pagination
          currentPage={page}
          totalPage={13}
          handlePageChange={handlePageChange}
        />
      </Flexer>
      {openModal && (
        <Modal handleClose={handleCloseModal}>
          <TouristsModal />
        </Modal>
      )}
    </Container>
  );
};

export default Tourists;
