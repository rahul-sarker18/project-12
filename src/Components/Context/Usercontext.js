import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [buyi, setBuyi] = useState(null);

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
    buyi, setBuyi,
    signupEmail,
    logemail,
    auth,
  };
  return (
    <div>
      <Authcontext.Provider value={authInfo}>
        {children}
      </Authcontext.Provider>
    </div>
  );
};

export default Usercontext;
