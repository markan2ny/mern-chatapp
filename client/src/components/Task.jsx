import React from "react";
import * as Fa from "react-icons/fa";

export const Task = ({ task }) => {
  return (
    <div className="border border-white shadow-xl text-white uppercase flex justify-between items-center my-3 hover:border-orange-300">
      <div className="p-3 text-xl hover:text-orange-300">{task.title}</div>
      <div className="items-center text-xl bg-white p-3">
        <button className="text-green-500 mr-2">
          <Fa.FaCheck />
        </button>
        <button className="text-red-500">
          <Fa.FaTimes />
        </button>
      </div>
    </div>
  );
};
