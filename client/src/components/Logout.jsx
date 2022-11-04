import axios from "axios";
import React from "react";
import { useContext } from "react";
import { api } from "../Api/Api";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const { getLoggedIn } = useContext(AuthContext);

  const logout = async () => {
    await api.get("/auth/logout");
    getLoggedIn();
  };

  return (
    <button
      onClick={logout}
      className="uppercase border border-white px-2 py-1 text-red-300 text-sm"
    >
      Logout
    </button>
  );
};
