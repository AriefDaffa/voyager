import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import dummyUser from '@/data/user_data.json';
import Flexer from '@/components/Flexer';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <Container className="px-2 h-screen pt-24 md:px-4">
      <Navbar />
      <Flexer className="justify-center">
        <div className="bg-white mt-24 relative rounded-lg p-2 h-60 w-3/4">
          <div className="w-40 h-40 border-[1rem] border-white rounded-full absolute left-0 right-0 mx-auto -top-20">
            <img
              src={dummyUser.avatar}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="pt-20 text-center text-xs text-gray-500">
            {dummyUser.id}
          </div>
          <div className="pt-4 text-center text-3xl font-bold md:text-6xl">
            {dummyUser.name}
          </div>
          <div className="text-center text-xs text-gray-500">
            {dummyUser.email}
          </div>
        </div>
      </Flexer>
    </Container>
  );
};

export default Profile;
