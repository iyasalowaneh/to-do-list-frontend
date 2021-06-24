//actions
import { DELETE_TASK } from "./actions";
import { CREATE_TASK } from "./actions";
import { UPDATE_TASK } from "./actions";
import { FETCH_TASKS } from "./actions";
const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      const tasksToKeep = state.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
      return {
        ...state,
        tasks: tasksToKeep,
      };

    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };

    case UPDATE_TASK:
      const { updateTask } = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updateTask.id ? updateTask : task
        ),
      };
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
