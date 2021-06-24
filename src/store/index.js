import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { fetchTasks } from "./actions";
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchTasks());

export default store;
