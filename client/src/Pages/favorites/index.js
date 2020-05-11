import React, { useEffect, useState } from "react";
import Api from "../../Utils/Api";
import "./index.css";
import NavBar from "../../Components/Nav/index";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    Api.getAllFavorites()
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(result) {
    const id = result._id;
    Api.deleteBook(id).then((res) => console.log(res.data));
    window.location.reload();
  }

  return (
    <>
      <NavBar />

      <div className="container book-favorites-container ">
        <p className="favorite-header">
          Your Favorite list <i className="far hear-icon-fav fa-heart"></i>
        </p>
        <div className="row">
          {favorites.map((result) => (
            <div key={result._id} className="col-md-3 col-sm-12 book-card">
              <div className="text-center mb-3 ">
                <img
                  src={result.cover}
                  className="book-cover center-align"
                  alt="Book Cover"
                />
              </div>
              <h5 className> Title: {result.title}</h5>
              <h6> {result.subtitle}</h6>
              <h6>
                {" "}
                <b>Author:</b> {result.author}
              </h6>
              <h6>
                <b>Category:</b> {result.category}
              </h6>{" "}
              <div className="row float-right ">
                <div className="col">
                  <i
                    onClick={() => deleteBook(result)}
                    class="far  delete-icon fa-trash-alt"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
