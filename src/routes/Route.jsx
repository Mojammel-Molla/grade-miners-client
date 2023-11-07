import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOuts/MainLayOut';
import Home from '../pages/home/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import AssignmentDetail from '../pages/home/assignments/AssignmentDetail';
import AssignmentUpdate from '../pages/home/assignments/AssignmentUpdate';

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
      {
        path: 'detail/:id',
        element: <AssignmentDetail />,
        loader: params => fetch(`http://localhost:5173/detail/${params.id}`),
      },
      {
        path: 'update/:id',
        element: <AssignmentUpdate />,
        loader: params => fetch(`http://localhost:5173/update/${params.id}`),
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
