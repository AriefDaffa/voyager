import { useEffect, useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import Flexer from '@/components/Flexer';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import AnimationWrapper from '@/components/AnimationWrapper';
import useGetListTourist from '@/repository/tourist/list-tourist/useGetListTourist';
import useDeleteTourist from '@/repository/tourist/delete-tourist/useDeleteTourist';
import useUpdateTourist from '@/repository/tourist/update-tourist/useUpdateTourist';
import useCreateTourist from '@/repository/tourist/create-tourist/useCreateTourist';
import { useUserContext } from '@/context/UserContext';

import TouristsHeader from './TouristsHeader';
import TouristsTable from './TouristsTable';
import TouristDeleteModal from './TouristModal/TouristDeleteModal';
import TouristUpdateModal from './TouristModal/TouristUpdateModal';
import TouristCreateModal from './TouristModal/TouristCreateModal';
import type { EditValArgs } from './types';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  const [msg, setMsg] = useState({ type: '', msg: '' });
  const [payload, setPayload] = useState({
    email: '',
    name: '',
    location: '',
    id: '',
  });

  const [page, setPage] = useState(1);

  const { user } = useUserContext();

  const handlePageChange = (val: number) => {
    setPage(val);
  };

  const handleEditVal = ({ email, name, location, id }: EditValArgs) => {
    setPayload({ email, name, location, id });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearPayload = () => {
    setPayload({
      email: '',
      name: '',
      location: '',
      id: '',
    });
  };

  // get all tourists
  const {
    data,
    isLoading: isTouristFetching,
    refetch,
  } = useGetListTourist({
    token: user.Token,
    page,
  });

  //delete tourist
  const {
    handleCloseDelete,
    handleDeleteTourist,
    handleOpenDelete,
    isLoading: isDeleting,
    isModalOpen: isDeleteModalOpen,
  } = useDeleteTourist({
    id: payload.id,
    payload: {
      tourist_email: payload.email,
      tourist_location: payload.location,
      tourist_name: payload.name,
    },
    refetch,
    token: user.Token,
    setMsg,
    clearPayload,
  });

  // Update tourist
  const {
    handleCloseUpdate,
    handleOpenUpdate,
    handleUpdateTourist,
    isLoading: isUpdating,
    isModalOpen: isUpdateModalOpen,
  } = useUpdateTourist({
    id: payload.id,
    payload: {
      tourist_email: payload.email,
      tourist_location: payload.location,
      tourist_name: payload.name,
    },
    refetch,
    token: user.Token,
    setMsg,
    clearPayload,
  });

  // Create tourist
  const {
    handleCloseCreate,
    handleCreateTourist,
    handleOpenCreate,
    isLoading: isCreating,
    isModalOpen: isCreateModalOpen,
  } = useCreateTourist({
    payload: {
      tourist_email: payload.email,
      tourist_location: payload.location,
      tourist_name: payload.name,
    },
    refetch,
    token: user.Token,
    setMsg,
  });

  useEffect(() => {
    if (msg.type !== '') {
      setTimeout(() => {
        setMsg({ type: '', msg: '' });
      }, 2000);
    }
  }, [msg]);

  return (
    <AnimationWrapper>
      <Container className="px-2 py-24 h-auto md:px-4">
        <Navbar />
        <TouristsHeader
          totalTourist={data.totalrecord}
          handleOpenModal={handleOpenCreate}
        />
        <TouristsTable
          currentPage={page}
          isLoading={isTouristFetching}
          tourists={data.tourists}
          handleEditVal={handleEditVal}
          handleOpenUpdate={handleOpenUpdate}
          handleOpenDelete={handleOpenDelete}
        />
        <Flexer className="mt-2 justify-center">
          <Pagination
            currentPage={page}
            totalPage={data.total_pages}
            handlePageChange={handlePageChange}
          />
        </Flexer>
      </Container>
      {isCreateModalOpen && (
        <Modal handleClose={handleCloseCreate}>
          <TouristCreateModal
            name={payload.name}
            email={payload.email}
            location={payload.location}
            isLoading={isCreating}
            handleChange={onChangeHandler}
            handleSubmit={handleCreateTourist}
          />
        </Modal>
      )}
      {isUpdateModalOpen && (
        <Modal handleClose={handleCloseUpdate}>
          <TouristUpdateModal
            name={payload.name}
            email={payload.email}
            location={payload.location}
            isLoading={isUpdating}
            handleChange={onChangeHandler}
            handleSubmit={handleUpdateTourist}
          />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal handleClose={handleCloseDelete}>
          <TouristDeleteModal
            name={payload.name}
            email={payload.email}
            isLoading={isDeleting}
            handleSubmit={handleDeleteTourist}
          />
        </Modal>
      )}
      {msg.type !== '' && (
        <div className="fixed top-2 right-2 z-[60]">
          <Toast type={msg.type}>{msg.msg}</Toast>
        </div>
      )}
    </AnimationWrapper>
  );
};

export default Tourists;
