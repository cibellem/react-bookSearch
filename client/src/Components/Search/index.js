import React, { useState } from "react";
import API from "../../Utils/Api";
import "./style.css";

import BookCard from "../../Components/BookCard/index";

function SearchBox() {
  // search will hold the inital Title/word searched. It's needed for the API call
  //result holds the api response with the data in the format I want, them I passe down trough props to create the book card
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  function handleSearch() {
    API.getBook(search).then((res) => {
      const resultAPi = res.data.items;
      const newArray = [];
      resultAPi.forEach((item) => {
        const newObj = item.volumeInfo;
        newArray.push(newObj);
      });
      setResult(newArray);
    });
  }

  return (
    <>
      {" "}
      <section className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="col-md-5 form-control book-input"
            placeholder="Search books.."
            aria-describedby="basic-addon2"
            value={search}
            name="search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="input-group-append">
            <span onClick={handleSearch} className="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        <BookCard results={result} search={search} />
      </section>
    </>
  );
}

export default SearchBox;
