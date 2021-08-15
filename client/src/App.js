import { EnteryFormComponent } from "./components/EnteryForm";
import DepartmentPage from "./components/DepartmentPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EnteryFormComponent />
        </Route>
        <Route path="/department/:id">
          <DepartmentPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
