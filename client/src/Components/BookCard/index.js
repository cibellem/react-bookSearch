import React, { useState } from "react";
import "./index.css";
import Modal from "react-bootstrap/Modal";

function BookCard(props) {
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


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
          <section className="book-item " key={result.id}>
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
        
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default BookCard;
