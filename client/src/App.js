import { EnteryFormComponent } from "./components/EnteryForm";
import DepartmentPage from "./components/DepartmentPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
