import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskList } from "../components/TaskList";
import { useFetch } from "../hooks/useFetch";
import { api } from "../Api/Api";

export const Home = () => {
  const { loggedIn } = useContext(AuthContext);
  const [task, setTask] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await api
      .post("/tasks", { title: task })
      .then((res) => {
        toast.success(res.data.message);
        setTask("");
      })
      .catch((err) => console.log(err));
  };

  return !loggedIn ? (
    <div className="flex justify-center h-[calc(_100vh_-_48px_)] items-center">
      <div className="text-5xl font-bold text-slate-300 uppercase tracking-wider">
        NOT LOGIN
      </div>
    </div>
  ) : (
    <div>
      <div className="max-w-[100%] w-[600px] mx-auto">
        <div className="border border-white shadow-lg mt-[50px] p-3">
          <h1 className="text-slate-200 font-bold text-3xl "></h1>
          <p className="text-slate-300 tracking-wide my-1"></p>

          <div className="my-4 relative mt-10">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter Task Name"
                className="border pl-2 pt-2 pr-[102px] pb-2 outline-none text-white border-white w-full bg-transparent"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button className="absolute top-0 right-0 text-white border border-white uppercase p-2">
                Add Task
              </button>
            </form>
          </div>
        </div>
        <TaskList />
      </div>
    </div>
  );
};
