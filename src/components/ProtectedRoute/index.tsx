import { Navigate, Outlet, useLocation } from 'react-router-dom';
import type { FC } from 'react';

import { useUserContext } from '@/context/UserContext';

interface ProtectedRouteProps {}

const ProtectedRoute: FC<ProtectedRouteProps> = () => {
  const { user } = useUserContext();

  const location = useLocation();

  if (user.Id === '') {
    localStorage.setItem('voy-lastPath', location.pathname);
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
