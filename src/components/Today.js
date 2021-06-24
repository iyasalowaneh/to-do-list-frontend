import { Link } from "react-router-dom";
import TaskItem from "./TasksItem";
import { List, Title, Logo } from "../styles";

import { useSelector } from "react-redux";
var moment = require("moment"); // require

const Today = () => {
  const tasks = useSelector((state) => state.tasks);
  const today = new Date();

  let todayTasksEnd = tasks
    .filter((task) => new Date(task.deadLine) < today)
    .map((task) => (
      <div>
        <h5>{task.name}</h5>
        <p>{task.description} </p>
        <p>{task.priority} </p>
        <p>{task.status} </p>
        <p>{moment(task.deadLine, "YYYYMMDD").fromNow()} </p>
      </div>
    ));

  let todayTasks = tasks
    .filter((task) => new Date(task.deadLine) === today)
    .filter((task) => task.status === false)
    .map((task) => <TaskItem task={task} key={task.id} />);
  let futureTasks = tasks
    .filter((task) => new Date(task.deadLine) > today)
    .filter((task) => task.status === false)
    .map((task) => <TaskItem task={task} key={task.id} />);

  let finshedTasks = tasks
    .filter((task) => task.status === true)
    .map((task) => <TaskItem task={task} key={task.id} />);
  return (
    <div>
      <Logo to="/tasks/addtask">Add Task</Logo>
      <Title>Today's Tasks</Title>
      <List>{todayTasks}</List>
      <Title>To Do in the Future</Title>
      <List>{futureTasks}</List>
      <Title>Finshed Tasks</Title>
      <List>{finshedTasks}</List>
      <Title>Missed Tasks</Title>
      <List>{todayTasksEnd} </List>
    </div>
  );
};

export default Today;
