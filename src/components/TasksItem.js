import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/actions";
import MarkDone from "./buttons/MarkDone";
var moment = require("moment"); // require
let disable = false;
const TaskItem = (props) => {
  const task = props.task;
  const dispatch = useDispatch();
  let x = { ...task };
  return (
    <div>
      <div>
        <Link to={`/tasks/${task.slug}/edit`}>Update Task</Link>

        <h5>{task.name}</h5>
        <p>{task.description} </p>
        <p>{task.priority} </p>
        <p>{task.status} </p>
        <p>{moment(task.deadLine, "YYYYMMDD").fromNow()} </p>

        <DeleteButton taskId={task.id} />
        {!disable ? <MarkDone updatetask={task} /> : ""}
      </div>
    </div>
  );
};

export default TaskItem;
