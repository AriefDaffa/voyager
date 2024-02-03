import { IoChevronBack } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, type FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Flexer from '@/components/Flexer';
import useGetTouristDetail from '@/repository/tourist/detail-tourist/useGetTouristDetail';
import Skeleton from '@/components/Skeleton';
import { useUserContext } from '@/context/UserContext';

interface TouristDetailProps {}

const TouristDetail: FC<TouristDetailProps> = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const params = useParams();

  const id = params?.id || '';

  const { data, isLoading, isError } = useGetTouristDetail({
    id,
    token: user.Token,
  });

  useEffect(() => {
    if (isError && !isLoading) {
      navigate('/not-found');
    }
  }, [isError, isLoading, navigate]);

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
          <div className="h-64 w-64">
            {!isLoading ? (
              <img
                src={data.tourist_profilepicture}
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            ) : (
              <Skeleton className="w-full h-full" />
            )}
          </div>
          <div className="text-center py-4">
            <div className="text-xs text-gray-500">
              {data.id || <Skeleton className="h-4 " />}
            </div>
            <div className="font-semibold text-4xl py-2">
              {data.tourist_name || <Skeleton className="h-8" />}
            </div>
            <Flexer className="gap-2 flex-col w-full items-center md:flex-row">
              <Flexer className="text-sm text-gray-500 items-center gap-1">
                <span>
                  <IoMdMail />
                </span>

                {data.tourist_email || (
                  <Skeleton className="h-4 w-60 md:w-44" />
                )}
              </Flexer>
              <Flexer className="text-sm text-gray-500 items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>
                {data.tourist_location || (
                  <Skeleton className="h-4 w-60 md:w-44" />
                )}
              </Flexer>
            </Flexer>
          </div>
        </Flexer>
      </Flexer>
    </Container>
  );
};

export default TouristDetail;
