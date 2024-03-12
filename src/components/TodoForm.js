"use client";
import { useDispatch } from "react-redux";
import classes from "./TodoForm.module.css";
import { useState } from "react";
import { AddTodo } from "@/store/slice/todoSlice";

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const [work, setWork] = useState([]);
  const [description, setDescription] = useState([]);
  const [time, setTime] = useState([]);
  const workHandler = (e) => {
    setWork(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };
  const timeHandler = (e) => {
    setTime(e.target.value);
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const myTodo = {
      work,
      description,
      time,
    };
    dispatch(AddTodo(myTodo));
    props.todoData(myTodo);
    console.log(myTodo);
    setWork("");
    setDescription("");
    setTime("");
  };
  return (
    <form onSubmit={submitHandler} className={classes.todoForm}>
      <h1>Add ToDos Here</h1>
      <div className={classes.input}>
        <label htmlFor="Work">Add Work</label>
        <br></br>
        <input
          id="work"
          type="text"
          placeholder="Add todays task"
          onChange={(e) => workHandler(e)}
          value={work}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="description">Description</label>
        <br></br>
        <input
          id="description"
          type="text"
          placeholder=" Add description here"
          onChange={(e) => descriptionHandler(e)}
          value={description}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="time">Time</label>
        <br></br>
        <input
          id="time"
          type="time"
          onChange={(e) => timeHandler(e)}
          value={time}
        />
      </div>
      <button type="submit"> Add Todo</button>
    </form>
  );
};

export default TodoForm;
