import React, { useEffect, useState } from "react";
import Api from "../../Utils/Api";
import "./index.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    Api.getAllFavorites()
      .then(res => setFavorites(res.data))
      .catch(err => console.log(err));
  }
  console.log(favorites);
  return (
    <div className="container book-favorites-container ">
      <p className="favorite-header">
        Your Favorite list <i className="far hear-icon-fav fa-heart"></i>
      </p>
      <div className="row">
        {favorites.map(result => (
          <div key={result.title} className="col-md-3   col-sm-12  book-card">
            <img
              src={result.cover}
              className="book-cover center-align"
              alt="Book Cover"
            />
            <h5 className> Title: {result.title}</h5>
            <h6> {result.subtitle}</h6>
            <h6>Author: {result.authors}</h6>
            <h6>Category: {result.categories}</h6>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
