import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOuts/MainLayOut';
import Home from '../pages/home/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
export default router;
