import React, { createContext, useEffect, useState } from "react";
import { api } from "../Api/Api";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    await api
      .get(`/auth/loggedin`)
      .then((res) => {
        setLoggedIn(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
