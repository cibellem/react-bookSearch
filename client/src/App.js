import React, { useState } from "react";
import SearchBox from "./Components/SearchBox/index";
import NavBar from "./Components/Nav/index";

import BookCard from "./Components/BookCard/index";

function App() {
  const [search, setSearch] = useState([""]);
  return (
    <>
      <NavBar />
      <SearchBox />

      {!search ? <BookCard /> : null}
    </>
  );
}

export default App;
