import React from "react";
import "./index.css";
function BookCard(props, results, search) {
  console.log(props);
  console.log(search);

  return (
    <div className="  book-card-container  ">
      <div className="row">
        {props.results.map(result => (
          <div className="col-md-3   col-sm-12  book-card">
            <img
              src={result.imageLinks.thumbnail}
              className="book-cover center-align"
              alt="Book Cover"
            />
            <h6 className> Title: {result.title}</h6>
            <h6>Author: {result.authors}</h6>
            <h6>Category: {result.categories}</h6>
            <i class="far fa-heart"></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCard;
