import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./Components/Nav";
import Favorites from "./Pages/favorites/index";
import SearchBox from "./Pages/books/index";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={SearchBox} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
