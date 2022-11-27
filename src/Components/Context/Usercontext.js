import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [roll, setRoll] = useState(null);
  const provider = new GoogleAuthProvider();
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
  //google submite
  const googlesubmite = () => {
    SetLoder(true);
    return signInWithPopup(auth, provider);
  };
  // user get
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        
        setUser(currentUser);
        SetLoder(false);
    });

    return () => unsubscribe();
}, [])
  const authInfo = {
    user,
    roll,
    setRoll,
    loder,
    auth,
    signupEmail,
    logemail,
    googlesubmite,
  };
  return (
    <div>
      <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default Usercontext;
