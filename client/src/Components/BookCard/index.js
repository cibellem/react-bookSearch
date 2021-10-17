import React, { useState } from "react";
import "./index.css";
import Api from "../../Utils/Api";
import Modal from "react-bootstrap/Modal";

function BookCard(props) {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //check in the db if favorite book it's already there, if so does not post
  function saveBook(result) {
    const title = result.title;
    console.log(title);
    Api.getBookByTitle(title).then((res) => {
      if (!res.data) {
        const bookData = {
          title: result.title,
          cover: result.imageLinks.thumbnail,
          author: result.authors,
          category: result.categories,
          description: result.description,
        };

        Api.saveBook(bookData).then(
          (res) => handleShow(true),

          setMessage(false)
        );

        //push the new book object to the end of the array of favorites
        setFavorites((prevArray) => [...prevArray, bookData]);
      } else {
        setMessage(true);
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

      <section className=" book-card  ">
        {props.results.map((result) => (
          <section className="book-item " key={result.title}>
            {" "}
            <div>
              <img
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
                src={
                  result.imageLinks === undefined
                    ? ""
                    : result.imageLinks.thumbnail
                }
                alt="Book Cover"
              />
            </div>
            <div>
              <h5>{result.title}</h5>
              <h6> {result.authors}</h6>
              <p>
                {result.description === undefined
                  ? "No description available"
                  : result.description}
              </p>
              <button
                className=" save-button"
                onClick={() => saveBook(result)}
                id={result.title}
              >
                Add to favorites
              </button>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default BookCard;
