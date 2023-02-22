import React, { useState } from "react";

import "./style.css";

function SearchBox({handleSearch}) {
  const [search, setSearch] = useState("");
  return (

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
            <span onClick={()=>handleSearch(search)} className="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </section>

  );
}

export default SearchBox;
