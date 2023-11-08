import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOuts/MainLayOut';
import Home from '../pages/home/Home';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import AssignmentDetail from '../pages/home/assignments/AssignmentDetail';
import AssignmentUpdate from '../pages/home/assignments/AssignmentUpdate';

import Submission from '../pages/submission-page/Submission';
import CreateAssignment from '../pages/create-assignment-page/CreateAssignment';
import MyAssignments from '../pages/my-assignments/MyAssignments';
import SelectedAssignments from '../pages/selected-assignments/SelectedAssignments';
import PrivateRoute from './PrivateRoute';
import TakeAssignment from '../pages/create-assignment-page/TakeAssignment';

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
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-assignments',
        element: (
          <PrivateRoute>
            <MyAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: 'selected-assignments',
        element: (
          <PrivateRoute>
            <SelectedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: 'submissions',
        element: (
          <PrivateRoute>
            <Submission />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/submissions'),
      },
      {
        path: 'take-assignment',
        element: (
          <PrivateRoute>
            <TakeAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: 'detail/:id',
        element: (
          <PrivateRoute>
            <AssignmentDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/detail/${params.id}`),
      },
      {
        path: 'update/:id',
        element: (
          <PrivateRoute>
            <AssignmentUpdate />
          </PrivateRoute>
        ),
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
