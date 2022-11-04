import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/Api";

const initialVal = {
  fullname: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [formVal, setFormVal] = useState(initialVal);
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // handler for each field
  const inputChange = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };

  // handler for submit
  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(formVal);
    await api
      .post("/auth/register", formVal)
      .then((res) => {
        toast.success(res.data.message);
        getLoggedIn();
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="mt-[50px] border border-white w-[450px] p-10 shadow-lg">
        <span className="uppercase mb-5 block font-bold text-white text-xl">
          Register
        </span>
        <form
          onSubmit={handlerSubmit}
          className="text-white"
          autoComplete="off"
        >
          <input
            type="text"
            className="border border-white bg-transparent p-2 w-full outline-none mb-4"
            placeholder="Full Name"
            name="fullname"
            onChange={inputChange}
          />
          <input
            type="email"
            className="border border-white p-2 w-full outline-none mb-4 bg-transparent"
            placeholder="Email address"
            name="email"
            onChange={inputChange}
          />
          <input
            type="password"
            className="border border-white bg-transparent p-2 w-full outline-none mb-4"
            placeholder="Password"
            name="password"
            onChange={inputChange}
          />
          <button className="border py-2 px-5 block ml-auto border-white uppercase font-bold text-white tracking-wide">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
