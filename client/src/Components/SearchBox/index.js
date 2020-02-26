import React, { useState } from "react";
import API from "../../Utils/Api";

function SearchBox() {
  const [search, setSearch] = useState("");

  function handleSearch() {
    setSearch(search);
    API.getBook(search).then(res => console.log(res.data));
  }

  return (
    <>
      <label htmlFor="search">Search a Book</label>
      <input
        type="text"
        name="search"
        id="searchInput"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
    </>
  );
}

export default SearchBox;
