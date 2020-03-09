import React, { useState } from "react";
import "./index.css";
import Api from "../../Utils/Api";
import Modal from "react-bootstrap/Modal";

function BookCard(props) {
  const [favorites, setFavorites] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState(false);

  console.log(favorites);
  //check in the db if favorite book it's already there, if so does not post
  function saveBook(result) {
    const bookTitle = result.title;
    Api.getBookByTitle(bookTitle).then(bookCheck => {
      if (!bookCheck.data) {
        const bookData = {
          title: result.title,
          cover: result.imageLinks.thumbnail,
          author: result.authors,
          category: result.categories
        };

        Api.saveBook(bookData).then(res => handleShow(true), setMessage(false));

        //push the new book object to the end of the array of favorites
        setFavorites(prevArray => [...prevArray, bookData]);
      } else {
        setMessage(true);
        console.log("Book already in DB");
      }
    });
  }
  return (
    <>
      <Modal centered={true} size="sm" show={show} onHide={handleClose}>
        <Modal.Header
          className="modal-header-bookCard"
          closeButton
        ></Modal.Header>
        <Modal.Body className="modal-body-bookCard">
          Book successfully added to favorites <i class="fas fa-heart"></i>
        </Modal.Body>
      </Modal>

      <h6 className="book-in-db" style={message ? {} : { display: "none" }}>
        It looks like this book it's already in your favorites
        <i className="fas fa-heart"></i>
      </h6>

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
    </>
  );
}

export default BookCard;
