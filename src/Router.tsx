import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Tourists from './pages/Tourists';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import TouristDetail from './pages/TouristDetail';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/tourists',
      element: <Tourists />,
    },
    {
      path: '/tourists/:id',
      element: <TouristDetail />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
