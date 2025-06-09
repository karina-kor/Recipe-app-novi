import React, { createContext, useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updatePassword,
  updateEmail,
} from 'firebase/auth';

const initialUserData = {
  email: '',
  id: '',
  token: '',
  displayName: 'User',
  photoURL: '',
};

const MISSING_AUTH_OBJECT_ERROR = 'Missing auth provider object';

export const AuthUserContext = createContext();

export const AuthUserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialUserData);
  const [firebaseAuthObject, setFirebaseAuthObject] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    setFirebaseAuthObject(auth);
  }, []);

  useEffect(() => {
    if (!firebaseAuthObject) return;

    onAuthStateChanged(firebaseAuthObject, (user) => {
      if (user) {
        setUserData({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }
    });
  }, [firebaseAuthObject]);

  // Function to update the context state
  const updateUserData = (newUserData) => {
    const updatedUserData = {
      ...userData,
      ...newUserData,
    };

    setUserData(updatedUserData);
  };

  const resetUserData = () => {
    setUserData(initialUserData);
    if (firebaseAuthObject) {
      signOut(firebaseAuthObject);
    }
  };

  const signIn = async (email, password) => {
    if (!firebaseAuthObject) throw MISSING_AUTH_OBJECT_ERROR;

    const userCredential = await signInWithEmailAndPassword(
      firebaseAuthObject,
      email,
      password
    );
    const user = userCredential.user;
    updateUserData({
      email: user.email,
      token: user.accessToken,
      id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  const signUp = async (email, password, displayName) => {
    if (!firebaseAuthObject) throw MISSING_AUTH_OBJECT_ERROR;

    const createdUser = await createUserWithEmailAndPassword(
      firebaseAuthObject,
      email,
      password
    );

    const { user } = createdUser;
    updateProfile(user, {
      displayName: displayName, // some displayName,
      photoURL: '', // some photo url
    });

    updateUserData({
      email: user.email,
      token: user.accessToken,
      id: user.uid,
      displayName: displayName,
    });
  };

  const changePassword = async (newPassword) => {
    if (!firebaseAuthObject || !firebaseAuthObject.currentUser)
      throw MISSING_AUTH_OBJECT_ERROR;

    await updatePassword(firebaseAuthObject.currentUser, newPassword);
  };

  const changeNameAndPhoto = async (newDisplayName, newphotoURL) => {
    if (!firebaseAuthObject || !firebaseAuthObject.currentUser)
      throw MISSING_AUTH_OBJECT_ERROR;

    await updateProfile(firebaseAuthObject.currentUser, {
      displayName: newDisplayName, // some displayName,
      photoURL: newphotoURL, // some photo url
    });

    updateUserData({
      photoURL: newphotoURL,
      displayName: newDisplayName,
    });
  };

  return (
    <AuthUserContext.Provider
      value={{
        userData,
        updateUserData,
        resetUserData,
        signIn,
        signUp,
        changePassword,
        changeNameAndPhoto,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
