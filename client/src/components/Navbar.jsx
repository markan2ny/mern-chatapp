import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Logout } from "./Logout";

export const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <header className="w-full py-2 bg-slate-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white uppercase tracking-wider text-2xl">
          <Link to={`/`}>Logo</Link>
        </div>
        <ul className="flex text-white uppercase tracking-wider text-md items-center">
          <li>
            <Link to={`/`} className="mr-2">
              Home
            </Link>
          </li>
          {!loggedIn && (
            <>
              <li className="mr-2">
                <Link to={`/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/register`}>Register</Link>
              </li>
            </>
          )}
          {loggedIn && (
            <>
              <li>
                <Logout />
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
