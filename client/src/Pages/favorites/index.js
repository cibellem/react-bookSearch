import React, { useEffect, useState } from "react";
import Api from "../../Utils/Api";

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

  function deleteBook(result) {
    const id = result._id;
    Api.deleteBook(id).then(res => console.log(res.data));
    window.location.reload();
  }

  console.log(favorites);
  return (
    <div className="book-card-container  ">
      <h5>
        Your Favorite list <i className="far fa-heart"></i>
      </h5>
      <div className="row">
        {favorites.map(result => (
          <div key={result._id} className="col-md-3   col-sm-12  book-card">
            <img
              src={result.cover}
              className="book-cover center-align"
              alt="Book Cover"
            />
            <h5 className> Title: {result.title}</h5>
            <h6> {result.subtitle}</h6>
            <h6>Author: {result.authors}</h6>
            <h6>Category: {result.categories}</h6>{" "}
            <button onClick={() => deleteBook(result)}>
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
