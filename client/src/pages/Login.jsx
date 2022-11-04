import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/Api";

const initialVal = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formVal, setFormVal] = useState(initialVal);

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    // destructuring the event.target
    const { name, value } = e.target;

    setFormVal({ ...formVal, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await api
      .post("/auth/login", formVal)
      .then((res) => {
        setFormVal(initialVal);
        getLoggedIn();
        navigate("/");
      })
      .catch((err) => {
        const { error } = err.response.data;
        toast.error(error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="mt-[50px] border border-white w-[450px] p-10 shadow-lg">
        <span className="uppercase mb-5 block font-bold text-white text-xl">
          Login
        </span>
        <form onSubmit={submitHandler} autoComplete="off">
          <input
            type="email"
            name="email"
            className="border border-white p-2 w-full outline-none mb-4 bg-transparent text-white"
            placeholder="Email address"
            onChange={changeHandler}
            value={formVal.email}
          />
          <input
            type="password"
            name="password"
            className="border border-white text-white p-2 w-full outline-none mb-4 bg-transparent"
            placeholder="Password"
            onChange={changeHandler}
            value={formVal.password}
          />
          <button className="border py-2 px-5 block ml-auto border-white uppercase font-bold text-white tracking-wide">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
