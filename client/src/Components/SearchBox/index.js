import React, { useState } from "react";
import API from "../../Utils/Api";
import "./index.css";
import BookCard from "../BookCard";

function SearchBox() {
  const [search, setSearch] = useState([""]);
  const results = [];

  function handleSearch() {
    API.getBook(search).then(res => {
      const resultAPi = res.data.items;
      // console.log(resultAPi);
      // console.log(resultAPi.volumeInfo);
      resultAPi.forEach(item => {
        const newObj = item.volumeInfo;
        results.push(newObj);
        // console.log(newObj);
        console.log(results);
        // setSearch(newObj);
      });
    });
  }

  return (
    <div className=" search-box ">
      <div className="row">
        <label htmlFor="search">Search a book tittle:</label>
      </div>

      <div className="row ">
        <input
          className="  col-10 search-input"
          type="text"
          name="search"
          id="searchInput"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button className="search-button" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      <BookCard results={results} />
    </div>
  );
}

export default SearchBox;
