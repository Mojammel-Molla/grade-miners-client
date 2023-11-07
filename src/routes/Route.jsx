import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOuts/MainLayOut';
import Home from '../pages/home/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import AssignmentDetail from '../pages/home/assignments/AssignmentDetail';
import AssignmentUpdate from '../pages/home/assignments/AssignmentUpdate';

import Submission from '../pages/submission-page/Submission';
import CreateAssignment from '../pages/create-assignment-page/CreateAssignment';

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
        path: 'create-assignment',
        element: <CreateAssignment />,
      },
      {
        path: 'submissions',
        element: <Submission />,
      },
      {
        path: 'detail/:id',
        element: <AssignmentDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/detail/${params.id}`),
      },
      {
        path: 'update/:id',
        element: <AssignmentUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
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
