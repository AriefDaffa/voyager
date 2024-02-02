import { useEffect, useState } from 'react';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import Flexer from '@/components/Flexer';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import useGetListTourist from '@/repository/tourist/list-tourist/useGetListTourist';
import { useUserContext } from '@/context/UserContext';
import { updateTourist } from '@/repository/tourist/update-tourist';
import { createTourist } from '@/repository/tourist/create-tourist';
import { deleteTourist } from '@/repository/tourist/delete-tourist';

import TouristsHeader from './TouristsHeader';
import TouristsTable from './TouristsTable';
import TouristsModal from './TouristsModal';
import TouristDeleteModal from './TouristDeleteModal';
import type { EditValArgs } from './types';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', msg: '' });
  const [payload, setPayload] = useState({
    email: '',
    name: '',
    location: '',
    id: '',
  });

  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { user } = useUserContext();

  const { data } = useGetListTourist({ token: user.Token, page });

  const handlePageChange = (val: number) => {
    setPage(val);
  };

  const handleOpenModal = () => {
    setOpenModal(true);

    if (editMode) {
      setPayload({ email: '', name: '', location: '', id: '' });
      setEditMode(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);

    if (editMode) {
      setPayload({ email: '', name: '', location: '', id: '' });
      setEditMode(false);
    }
  };

  const handleEditVal = ({ email, name, location, id }: EditValArgs) => {
    setEditMode(true);
    setPayload({ email, name, location, id });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreateTourist = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editMode) {
        const request = await updateTourist(
          {
            tourist_email: payload.email,
            tourist_location: payload.location,
            tourist_name: payload.name,
          },
          payload.id,
          user.Token
        );

        const response = await request.json();

        setIsLoading(false);

        if (request.status >= 200 && request.status < 400) {
          if (response?.id) {
            setMsg({ type: 'success', msg: 'Tourist updated successfully ' });
          }
        } else {
          setMsg({
            type: 'warning',
            msg: 'Failed to update, please try again',
          });
        }
      } else {
        const request = await createTourist(
          {
            tourist_email: payload.email,
            tourist_location: payload.location,
            tourist_name: payload.name,
          },
          user.Token
        );

        const response = await request.json();

        setIsLoading(false);

        if (request.status >= 200 && request.status < 400) {
          if (response?.id) {
            setMsg({ type: 'success', msg: 'Tourist created successfully ' });
          }
        } else {
          setMsg({
            type: 'warning',
            msg: 'Failed to create, please try again',
          });
        }
      }
    } catch (error) {
      setIsLoading(false);
      setMsg({ type: 'warning', msg: 'Failed to create, please try again' });
    }
  };

  const handleOpenDelete = () => {
    setDeleteModal(true);

    if (editMode) {
      setPayload({ email: '', name: '', location: '', id: '' });
      setEditMode(false);
    }
  };

  const handleCloseDelete = () => {
    setDeleteModal(false);

    if (editMode) {
      setPayload({ email: '', name: '', location: '', id: '' });
      setEditMode(false);
    }
  };

  const handleDeleteTourist = async () => {
    try {
      const request = await deleteTourist(
        {
          tourist_email: payload.email,
          tourist_location: payload.location,
          tourist_name: payload.name,
        },
        payload.id,
        user.Token
      );

      const response = await request.json();

      setIsLoading(false);
      setDeleteModal(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.id) {
          setMsg({ type: 'success', msg: 'Tourist deleted successfully ' });
        }
      } else {
        setMsg({
          type: 'warning',
          msg: 'Failed to update, please try again',
        });
      }
    } catch (error) {
      setIsLoading(false);
      setDeleteModal(false);
      setMsg({ type: 'warning', msg: 'Failed to delete, please try again' });
    }
  };

  useEffect(() => {
    if (msg.type !== '') {
      setTimeout(() => {
        setMsg({ type: '', msg: '' });
      }, 2000);
    }
  }, [msg]);

  return (
    <>
      <Container className="px-2 py-24 h-auto md:px-4">
        <Navbar />
        <TouristsHeader
          totalTourist={data.totalrecord}
          handleOpenModal={handleOpenModal}
        />
        <TouristsTable
          currentPage={page}
          tourists={data.tourists}
          handleEditVal={handleEditVal}
          handleOpenModal={handleOpenModal}
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
      {openModal && (
        <Modal handleClose={handleCloseModal}>
          <TouristsModal
            name={payload.name}
            email={payload.email}
            location={payload.location}
            editMode={editMode}
            isLoading={isLoading}
            handleChange={onChangeHandler}
            handleSubmit={handleCreateTourist}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal handleClose={handleCloseDelete}>
          <TouristDeleteModal
            name={payload.name}
            email={payload.email}
            isLoading={isLoading}
            handleSubmit={handleDeleteTourist}
          />
        </Modal>
      )}
      {msg.type !== '' && (
        <div className="fixed top-2 right-2 z-[60]">
          <Toast type={msg.type}>{msg.msg}</Toast>
        </div>
      )}
    </>
  );
};

export default Tourists;
