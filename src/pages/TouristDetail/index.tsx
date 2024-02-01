import { useState } from 'react';
import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Flexer from '@/components/Flexer';
import dummyTourist from '@/data/tourist_data.json';
import Button from '@/components/Button';

interface TouristDetailProps {}

const TouristDetail: FC<TouristDetailProps> = () => {
  const [activateUpdate, setActivateUpdate] = useState(false);

  const updateMode = () => {
    setActivateUpdate(!activateUpdate);
  };

  return (
    <Container className="px-2 h-screen pt-24 md:px-4">
      <Navbar />
      <div>Back</div>
      <Flexer className="justify-center gap-4 items-center">
        <Flexer className="bg-white p-2 rounded-lg relative gap-2 w-5/6 flex-col md:flex-row md:w3/4">
          <Flexer className="justify-center">
            <div className="h-full w-64">
              <img
                src={dummyTourist.tourist_profilepicture}
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </Flexer>
          <Flexer flexDirection="col" className="justify-between w-full">
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Name</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="text"
                  defaultValue={dummyTourist.tourist_name}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {dummyTourist.tourist_name}
                </div>
              )}
            </Flexer>
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Email</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="email"
                  defaultValue={dummyTourist.tourist_email}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {dummyTourist.tourist_email}
                </div>
              )}
            </Flexer>
            <Flexer flexDirection="col" className="gap-1 w-full">
              <label className="text-sm text-gray-500">Location</label>
              {activateUpdate ? (
                <input
                  className="p-2 outline-none border border-[#dadada] rounded-md"
                  type="text"
                  defaultValue={dummyTourist.tourist_location}
                />
              ) : (
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                  {dummyTourist.tourist_location}
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
          </Flexer>
        </Flexer>
      </Flexer>
    </Container>
  );
};

export default TouristDetail;
