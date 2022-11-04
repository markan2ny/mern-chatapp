import { useState, useEffect } from "react";
import { api } from "../Api/Api";

export const useFetch = (options) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return data;
};
