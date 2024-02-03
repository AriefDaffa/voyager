import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Flexer from '@/components/Flexer';
import { useUserContext } from '@/context/UserContext';

import useGetProfile from '@/repository/user/profile/useGetProfile';
import Skeleton from '@/components/Skeleton';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { user } = useUserContext();

  const { data, isLoading } = useGetProfile({ id: user.Id, token: user.Token });

  // TODO: handle failed and loading
  return (
    <Container className="px-2 h-screen pt-24 md:px-4">
      <Navbar />
      <Flexer className="justify-center">
        <div className="bg-white mt-24 relative rounded-lg p-2 h-60 w-3/4">
          <div className="w-40 h-40 border-[1rem] border-white rounded-full absolute left-0 right-0 mx-auto -top-20">
            {!isLoading ? (
              <img
                src={data.avatar}
                alt=""
                className="w-full h-full rounded-full bg-gray-200"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-full" />
            )}
          </div>
          <div className="pt-20 text-center text-xs text-gray-500">
            {data.id || (
              <Flexer className="justify-center">
                <Skeleton className="h-6 w-full max-w-48" />
              </Flexer>
            )}
          </div>
          <div className="pt-4 text-center text-3xl font-bold md:text-6xl">
            {data.name || (
              <Flexer className="justify-center">
                <Skeleton className="h-12 w-full max-w-48" />
              </Flexer>
            )}
          </div>
          <div className="text-center text-base text-gray-500">
            {data.email || (
              <Flexer className="justify-center pt-2">
                <Skeleton className="h-6 w-full max-w-64" />
              </Flexer>
            )}
          </div>
        </div>
      </Flexer>
    </Container>
  );
};

export default Profile;
