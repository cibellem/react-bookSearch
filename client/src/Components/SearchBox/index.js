import React, { useState } from "react";
import API from "../../Utils/Api";
import "./index.css";

function SearchBox() {
  // search will hold the inital Title/word searched. It's needed for the API call
  //result holds the api response with the data in the format I want, them I passe down trough props to create the book card
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
    <div className=" container search-box ">
      <div className="row">
        <div className="col">
          <div className="row">
            <label className="search-label" htmlFor="search">
              Search a book by tittle/word/author:
            </label>
          </div>

          <div className="row input-row ">
            <input
              className=" form-control  col-md-10 col-sm-12 search-input"
              type="text"
              name="search"
              id="searchInput"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <button
              className="search-button button "
              onClick={() => handleSearch()}
            >
              Find Book
              <i class="mx-2 fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
