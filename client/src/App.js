import React, { useState } from "react";
import SearchBox from "./Components/SearchBox/index";
import NavBar from "./Components/Nav/index";
import "./index.css";

import BookCard from "./Components/BookCard/index";

function App() {
  const [search, setSearch] = useState([""]);
  return (
    <>
      <NavBar />
      <h6 className="bookQuote">
        You don’t have to burn books to destroy a culture. Just get people to
        stop reading them.” – Ray Bradbury
      </h6>
      <SearchBox />

      {!search ? <BookCard /> : null}
    </>
  );
}

export default App;
