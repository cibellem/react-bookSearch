import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Favorites from "./Pages/favorites/index";
import SearchBox from "./Pages/books/index";

import { Auth } from "aws-amplify";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/" component={SearchBox} />
          </Switch>

          {/* {!search ? <BookCard /> : null} */}
        </Router>
      </>
    );
  }
}

export default App;
