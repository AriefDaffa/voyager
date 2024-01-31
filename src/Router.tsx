import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
