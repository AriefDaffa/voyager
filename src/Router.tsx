import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Tourists from './pages/Tourists';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import TouristDetail from './pages/TouristDetail';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContextProvider } from './context/UserContext';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/tourists',
          element: <Tourists />,
        },
        {
          path: '/tourists/:id',
          element: <TouristDetail />,
        },
      ],
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default Router;
