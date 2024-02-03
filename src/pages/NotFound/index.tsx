import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Flexer from '@/components/Flexer';
import { useNavigate } from 'react-router-dom';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  const navigate = useNavigate();

  return (
    <Container className="px-2 h-screen md:px-4">
      <Navbar />
      <Flexer className="justify-center items-center h-full">
        <div className="text-center">
          <div className="text-8xl font-bold">404</div>
          <div>Page Not Found</div>
          <Flexer className="mt-12 gap-12 justify-center">
            <Button onClick={() => navigate(`/`)} text="Back to Homepage" />
          </Flexer>
        </div>
      </Flexer>
    </Container>
  );
};

export default NotFound;
