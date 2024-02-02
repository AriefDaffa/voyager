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
import { createTourist } from '@/repository/tourist/create-tourist';

import TouristsHeader from './TouristsHeader';
import TouristsTable from './TouristsTable';
import TouristsModal from './TouristsModal';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', msg: '' });

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

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCreateTourist = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const request = await createTourist(
        {
          tourist_email: email,
          tourist_location: location,
          tourist_name: name,
        },
        user.Token
      );

      const response = await request.json();

      setIsLoading(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.id) {
          setMsg({ type: 'success', msg: 'Tourist successfully created' });
        }
      } else {
        setMsg({ type: 'warning', msg: 'Failed to create, please try again' });
      }
    } catch (error) {
      setIsLoading(false);
      setMsg({ type: 'warning', msg: 'Failed to create, please try again' });
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
            <TouristsModal
              email={email}
              name={name}
              location={location}
              onEmailChange={onEmailChange}
              onNameChange={onNameChange}
              onLocationChange={onLocationChange}
              isLoading={isLoading}
              handleSubmit={handleCreateTourist}
            />
          </Modal>
        )}
      </Container>
      {msg.type !== '' && (
        <div className="absolute top-2 right-2 z-[60]">
          <Toast type={msg.type}>{msg.msg}</Toast>
        </div>
      )}
    </>
  );
};

export default Tourists;
