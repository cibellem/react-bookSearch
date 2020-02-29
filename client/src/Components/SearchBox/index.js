import React, { useState } from "react";
import API from "../../Utils/Api";
import "./index.css";
import BookCard from "../BookCard";

function SearchBox() {
  // search will hold the inital Title/word searched. It's needed for the API call
  //result holds the api response with the data in the format I want, them I passed down trough props to create the book card
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  function handleSearch() {
    API.getBook(search).then(res => {
      const resultAPi = res.data.items;
      const newArray = [];

      resultAPi.forEach(item => {
        const newObj = item.volumeInfo;
        newArray.push(newObj);
      });
      setResult(newArray);
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
      <BookCard results={result} />
    </div>
  );
}

export default SearchBox;
