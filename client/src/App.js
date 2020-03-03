import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBox from "./Components/SearchBox/index";
import NavBar from "./Components/Nav/index";
import "./index.css";
import Favorites from "./Pages/index";

import BookCard from "./Components/BookCard/index";

function App() {
  const [search, setSearch] = useState([""]);
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
        <h6 className="bookQuote">
          You don’t have to burn books to destroy a culture. Just get people to
          stop reading them.” – Ray Bradbury
        </h6>
        <SearchBox />

        {!search ? <BookCard /> : null}
      </>
    </Router>
  );
}

export default App;
