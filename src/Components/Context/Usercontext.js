import React, { createContext, useState } from "react";

export const Authencations = createContext();

const Usercontext = ({ children }) => {
  const [user, setUser] = useState("Rahul");
  const authInfo = {
    user,
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
