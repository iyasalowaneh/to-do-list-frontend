import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";

const MarkDone = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(updateTask({ ...props.updatetask, status: true }))
      }
      type="button"
      class="btn btn-success"
    >
      ✅
    </button>
  );
};
export default MarkDone;
