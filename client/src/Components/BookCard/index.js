import React, { useState } from "react";
import "./index.css";
import Api from "../../Utils/Api";
import Favorites from "../../Pages/favorites";

function BookCard(props) {
  const [favorites, setFavorites] = useState([]);

  //I want to add logic to the icon
  // const [icon, setIcon] = useState(false, (style = {{ color: "blue" }));

  console.log(favorites);

  function saveBook(result) {
    const bookData = {
      title: result.title,
      cover: result.imageLinks.thumbnail,
      author: result.authors,
      category: result.categories
    };

    Api.saveBook(bookData).then(res =>
      console.log("Book added to Favorites and saved to database")
    );

    //push the new book object to the end of the array of favorites
    setFavorites(prevArray => [...prevArray, bookData]);
  }
  return (
    <div className="book-card-container  ">
      <div className="row">
        {props.results.map(result => (
          <div key={result.title} className="col-md-3   col-sm-12  book-card">
            <img
              onError={e => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150";
              }}
              src={result.imageLinks.thumbnail}
              className="book-cover center-align"
              alt="Book Cover"
            />
            <h5 className> Title: {result.title}</h5>
            <h6> {result.subtitle}</h6>
            <h6>Author: {result.authors}</h6>
            <h6>Category: {result.categories}</h6>{" "}
            <i
              onClick={() => saveBook(result)}
              id={result.title}
              className="far fa-heart"
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCard;
