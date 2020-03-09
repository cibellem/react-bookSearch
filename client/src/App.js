import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Favorites from "./Pages/favorites/index";
import SearchBox from "./Pages/books/index";
import Login from "./Pages/login/index";
import Register from "./Pages/register/index";
import Home from "./Pages/home/index";
import { Auth } from "aws-amplify";

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  };

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = user => {
    this.setState({ user: user });
  };

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    };

    return (
      !this.state.isAuthenticating && (
        <>
          <Router>
            <Switch>
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/home" component={SearchBox} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/register"
                render={props => <Register {...props} auth={authProps} />}
              />
              <Route exact path="/" component={Home} />
            </Switch>

            {/* {!search ? <BookCard /> : null} */}
          </Router>
        </>
      )
    );
  }
}

export default App;
