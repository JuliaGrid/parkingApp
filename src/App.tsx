import React from "react";
import "./App.css";
import Login from "./components/Login/LoginCheck";
import Places from "./containers/Places";
import { PrivateRoute } from "./Auth/PrivateRoute";
import AuthProvider from "./Auth/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Places} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}
