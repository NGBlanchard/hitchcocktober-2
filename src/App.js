import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import List from "./components/List/List";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Context from "./Context";
import ApiService from "./services/api-service";
import TokenService from "./services/token-service.js";
import "./App.css";

class App extends React.Component {
  state = {
    userData: {},
    hasError: false,
  };
  static contextType = Context;

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      ApiService.getMovies().then((res) => this.context.setList(res));
      ApiService.getUserData().then((res) => this.context.setBigObj(res));
    } else
      this.setState({
        hasError: false,
      });
  }

  render() {
    return (
      <main className="App">
        {this.state.hasError && (
          <p className="red">There was an error. Reconsider everything.</p>
        )}
        <Switch>
          <PublicOnlyRoute
            restrictied={false}
            exact
            path={"/login"}
            component={LoginPage}
          />
          <Route
            restrictied={true}
            exact
            path={"/register"}
            component={RegistrationPage}
          />
          <PrivateRoute exact path={"/"} component={Home} />
          <PrivateRoute exact path={"/list"} component={List} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
