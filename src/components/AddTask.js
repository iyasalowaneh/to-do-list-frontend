import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
//actions
import { createTask } from "../store/actions";
import { updateTask } from "../store/actions";

const AddTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const taskSlug = useParams().taskSlug;
  const updatedTask = tasks.find((task) => task.slug === taskSlug);
  const [task, SetTask] = useState(
    updatedTask
      ? updatedTask
      : {
          name: "",
          description: "",
          priority: "",
          status: "",
          deadLine: "",
        }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetTask({ ...task, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedTask) dispatch(updateTask(task));
    else dispatch(createTask(task));
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit} class="row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInput">
          Task Name
        </label>
        <input
          type="text"
          class="form-control"
          id="autoSizingInput"
          placeholder="Task Name"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup">
          Description
        </label>
        <div class="input-group">
          <div class="input-group-text">Note</div>
          <input
            type="text"
            class="form-control"
            id="autoSizingInputGroup"
            placeholder="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">
          Priority
        </label>
        <select
          value={task.priority}
          name="priority"
          onChange={handleChange}
          class="form-select"
          id="autoSizingSelect"
        >
          <option selected>Choose...</option>
          <option value="high" name="high">
            High
          </option>
          <option value="medium" name="medium">
            Medium
          </option>
          <option value="low" name="low">
            Low
          </option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInput">
          Task Name
        </label>
        <input
          type="text"
          class="form-control"
          id="autoSizingInput"
          placeholder="Done or NotDone"
          value={task.status}
          name="status"
          onChange={handleChange}
        />
      </div>

      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInput">
          Deadline
        </label>
        <input
          type="date"
          class="form-control"
          id="autoSizingInput"
          placeholder="Date"
          name="deadLine"
          value={task.deadLine}
          onChange={handleChange}
        />
      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-primary">
          {updatedTask ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default AddTask;
