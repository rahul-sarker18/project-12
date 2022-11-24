import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const Authencations = createContext();
const auth = getAuth(app);

const Usercontext = ({ children }) => {
  const [user, setUser] = useState("Rahul");

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
  

  const authInfo = {
    user,
    loder,
    signupEmail,
    logemail,
    auth

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
