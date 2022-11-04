import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";
import { Error } from "./pages/Error";

export const App = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div className="container mx-auto">
        <Routes>
          <Route index path="/" element={<Home />} />
          {!loggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};
