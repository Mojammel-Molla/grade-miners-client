import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layOuts/MainLayOut';
import Home from '../pages/home/Home';

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
]);
export default router;
