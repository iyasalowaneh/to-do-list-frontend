import axios from "axios";

export const DELETE_TASK = "DELETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FETCH_TASKS = "FETCH_TASKS";

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: {
          taskId: taskId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      dispatch({
        type: CREATE_TASK,
        payload: {
          newTask: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTask = (updateTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/tasks/${updateTask.id}`,
        updateTask
      );
      dispatch({
        type: UPDATE_TASK,
        payload: { updateTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
