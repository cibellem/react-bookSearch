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

      <div className=" book-card  ">
        {props.results.map((result) => (
          <div className=" container book-item card mb-4  ">
            <div className="row " key={result.title}>
              <div className="col-md-2 col-sm-4 book-cover ">
                {" "}
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
              <div className="col-md-10 col-sm-8  ">
                <div className="row">
                  <div className="col">
                    <h5>{result.title}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6> {result.authors}</h6>
                  </div>
                </div>
                <div className="row ">
                  <div className="col book-description ">
                    <p>{result.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <p
                      className=" save-button"
                      onClick={() => saveBook(result)}
                      id={result.title}
                    >
                      Add to favorites
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookCard;
