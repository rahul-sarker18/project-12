import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const Authencations = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loder, SetLoder] = useState(true);

  //email and password sign up
  const signupEmail = (email, password) => {
    SetLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // email and password log in
  const logemail = (email, password) => {
    SetLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user get
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cruser) => {
      setUser(cruser);
      SetLoder(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loder,
    signupEmail,
    logemail,
    auth,
  };
  return (
    <div>
      <Authencations.Provider value={authInfo}>
        {children}
      </Authencations.Provider>
    </div>
  );
};

export default Usercontext;
