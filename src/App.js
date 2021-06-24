import { Route, Switch } from "react-router";
import AddTask from "./components/AddTask";
import Today from "./components/Today";
function App() {
  return (
    <div>
      <Switch>
        <Route path={["/tasks/addtask", "/tasks/:taskSlug/edit"]}>
          <AddTask />
        </Route>
        <Route exact path="/">
          <Today />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
