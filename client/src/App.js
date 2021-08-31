import { EnteryFormComponent } from "./components/EnteryForm";
import DepartmentPage from "./components/DepartmentPage";
import createSagaMiddleware from "redux-saga";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWear = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWear));
sagaMiddleWear.run(rootSaga);

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
