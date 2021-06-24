import { deleteTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(deleteTask(props.taskId))}
      type="button"
      class="btn btn-danger"
    >
      🗑
    </button>
  );
};
export default DeleteButton;
