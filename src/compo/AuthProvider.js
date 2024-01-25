import React, { useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider( props) {
  const [currentUser, setCurrentUser] = useState();



  // const [loading, setLoading] = useState(true);
  // Signs up on firebase with email and password.
  
  const signup = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth,email, password);
  }
  // signIn via firebase
  const signIn = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth,email, password);
  }
   const sign_out = () => {
     const auth = getAuth();
     return signOut(auth);
   };

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    signIn,
    sign_out,
  };


  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
} 
export default AuthProvider;
