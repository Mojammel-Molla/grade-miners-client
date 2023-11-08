import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loader) {
    return <span className="loading loading-spinner text-accent"></span>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/logIn" state={location.pathname} replace></Navigate>;
  }
};

export default PrivateRoute;
