import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const githubProvider = new GithubAuthProvider();
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

  // Log in with github
  const handleGithubLogIn = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
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
      setUser(currentUser);
      setLoader(false);
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
    handleGithubLogIn,
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
