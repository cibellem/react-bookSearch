import React, { useState } from "react";
import SearchBox from "./Components/SearchBox/index";

import BookCard from "./Components/BookCard/index";

function App() {
  const [search, setSearch] = useState([""]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <SearchBox />
        </div>
      </div>
      <div className="row">
        <div className="col">{!search ? <BookCard /> : null}</div>
      </div>
    </div>
  );
}

export default App;
