import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Nav/index";
import "./index.css";
import Favorites from "./Pages/favorites/index";
import SearchBox from "./Pages/books/index";

function App() {
  return (
    <>
      <NavBar />
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

export default App;
