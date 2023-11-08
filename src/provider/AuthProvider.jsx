import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // User Create

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in User
  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // Log in with Google
  const handleGoogleLogIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // User profile
  const handleUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        axios
          .post('https://grade-miners-server.vercel.app/jwt', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log('Token response', res.data);
          });
      } else {
        axios
          .post('https://grade-miners-server.vercel.app/logout', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loader,
    createUser,
    logInUser,
    logOutUser,
    handleGoogleLogIn,
    handleUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
