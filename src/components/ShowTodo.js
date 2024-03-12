"use client";

import React from "react";
import classes from "./ShowTodo.module.css";
import { useSelector } from "react-redux";

const ShowTodo = ({ passedData }) => {
  const todoData = useSelector((state) => state.todo.myTodo);

  console.log(passedData);

  return (
    <table className={classes.tab}>
      <thead className={classes.thead}>
        <tr>
          <th>Work</th>
          <th>Description</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {todoData.length === 0 ? (
          <tr>
            <td colSpan="3">No data Found</td>
          </tr>
        ) : (
          passedData.map((item, index) => (
            <tr key={index}>
              <td>{item.work}</td>
              <td>{item.description}</td>
              <td>{item.time}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ShowTodo;
