"use client";
import TodoForm from "../components/TodoForm";
import ShowTodo from "../components/ShowTodo";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getData = (data) => {
    setData((prev) => {
      return [...prev, data];
    });
  };
  return (
    <>
      <TodoForm todoData={getData} />
      <ShowTodo passedData={data} />
    </>
  );
}
