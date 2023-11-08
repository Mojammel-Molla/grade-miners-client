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
import PrivateRoute from './PrivateRoute';
import TakeAssignment from '../pages/create-assignment-page/TakeAssignment';
import AllAssignments from '../pages/home/assignments/AllAssignments';
import ReviewedAssignment from '../pages/review-assignment/ReviewedAssignment';
import AssignmentMarks from '../pages/submission-page/AssignmentMarks';
import ErrorPage from '../pages/error-page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
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
        path: 'reviewed-assignment',
        element: (
          <PrivateRoute>
            <ReviewedAssignment />
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://grade-miners-server.vercel.app/reviewed-assignments'),
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
        path: 'assignments',
        element: (
          <PrivateRoute>
            <AllAssignments />
            {/* <SelectedAssignments /> */}
          </PrivateRoute>
        ),
      },
      {
        path: 'submissions/:id',
        element: (
          <PrivateRoute>
            <AssignmentMarks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://grade-miners-server.vercel.app/submissions/${params.id}`
          ),
      },
      {
        path: 'submissions',
        element: (
          <PrivateRoute>
            <Submission />
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://grade-miners-server.vercel.app/submissions'),
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
          fetch(`https://grade-miners-server.vercel.app/detail/${params.id}`),
      },
      {
        path: 'update/:id',
        element: (
          <PrivateRoute>
            <AssignmentUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://grade-miners-server.vercel.app/update/${params.id}`),
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
