import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Task } from "./Task";

export const TaskList = () => {
  const tasks = useFetch({ url: "/tasks" });

  return tasks.length > 0 ? (
    <div className="mt-[25px]">
      {tasks && tasks.map((task) => <Task task={task} key={task._id} />)}
    </div>
  ) : (
    <div className="text-center text-4xl text-slate-200 font-bold mt-[25px]">
      NO TASK
    </div>
  );
};
