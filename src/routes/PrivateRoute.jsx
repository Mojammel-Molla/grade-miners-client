import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loader) {
    return (
      <div>
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ height: '300px', width: '300px' }}
        ></Player>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/logIn" state={location.pathname} replace></Navigate>;
  }
};

export default PrivateRoute;
