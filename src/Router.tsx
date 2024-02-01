import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Tourists from './pages/Tourists';

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
