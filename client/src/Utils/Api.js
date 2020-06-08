import axios from "axios";

export default {
  getBook: function(search) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAQyE5qbJ1H76JhCYlBO72T6qYHyv5TjQ8`
    );
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getAllFavorites: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  getBookByTitle: function(title) {
    return axios.get("/api/books/title/" + title);
  }
};
