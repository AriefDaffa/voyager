import { IoChevronBack } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Flexer from '@/components/Flexer';
import useGetTouristDetail from '@/repository/tourist/detail-tourist/useGetTouristDetail';
import { useUserContext } from '@/context/UserContext';

interface TouristDetailProps {}

const TouristDetail: FC<TouristDetailProps> = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const params = useParams();

  const id = params?.id || '';

  const { data } = useGetTouristDetail({
    id,
    token: user.Token,
  });

  return (
    <Container className="px-2 h-screen pt-24 md:px-4">
      <Navbar />
      <div>
        <Flexer
          onClick={() => navigate('/tourists')}
          className="gap-1 items-center w-min rounded-lg pr-2 text-gray-500 cursor-pointer hover:bg-gray-200"
        >
          <IoChevronBack size={18} className="cursor-pointer" />
          <div className="font-medium">Back</div>
        </Flexer>
      </div>
      <Flexer className="justify-center gap-4 items-center">
        <Flexer
          flexDirection="col"
          className="bg-white p-2 rounded-lg relative gap-2 items-center md:w-3/4"
        >
          <div className="h-full w-64">
            <img
              src={data.tourist_profilepicture}
              alt=""
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="text-center py-4">
            <div className="text-xs text-gray-500">{data.id}</div>
            <div className="font-semibold text-4xl py-2">
              {data.tourist_name}
            </div>
            <Flexer className="gap-2 flex-col w-full items-center md:flex-row">
              <Flexer className="text-sm text-gray-500 items-center gap-1">
                <span>
                  <IoMdMail />
                </span>
                {data.tourist_email}
              </Flexer>
              <Flexer className="text-sm text-gray-500 items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>
                {data.tourist_location}
              </Flexer>
            </Flexer>
          </div>
          {/* <Flexer className="justify-center">
            <div className="h-full w-64">
              <img
                src={data.tourist_profilepicture}
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </Flexer> */}
          {/* <Flexer flexDirection="col" className="justify-between w-full">
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Name</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="text"
                  defaultValue={data.tourist_name}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {data.tourist_name}
                </div>
              )}
            </Flexer>
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Email</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="email"
                  defaultValue={data.tourist_email}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {data.tourist_email}
                </div>
              )}
            </Flexer>
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Location</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="text"
                  defaultValue={data.tourist_location}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {data.tourist_location}
                </div>
              )}
            </Flexer>
            <Flexer className="mt-4 gap-2">
              <Button
                text={activateUpdate ? 'Cancel' : 'Edit Tourist'}
                onClick={updateMode}
              />
              {activateUpdate && <Button text="Submit" onClick={updateMode} />}
            </Flexer>
          </Flexer> */}
        </Flexer>
      </Flexer>
    </Container>
  );
};

export default TouristDetail;
