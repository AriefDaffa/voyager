import { useState } from 'react';
import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import Flexer from '@/components/Flexer';
import Modal from '@/components/Modal';
import useGetListTourist from '@/repository/tourist/list-tourist/useGetListTourist';
import { useUserContext } from '@/context/UserContext';

import TouristsHeader from './TouristsHeader';
import TouristsTable from './TouristsTable';
import TouristsModal from './TouristsModal';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const { user } = useUserContext();

  const { data } = useGetListTourist({ token: user.Token, page });

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
    <Container className="px-2 py-24 h-auto md:px-4">
      <Navbar />
      <TouristsHeader
        totalTourist={data.totalrecord}
        handleOpenModal={handleOpenModal}
      />
      <TouristsTable currentPage={page} tourists={data.tourists} />
      <Flexer className="mt-2 justify-center">
        <Pagination
          currentPage={page}
          totalPage={data.total_pages}
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
