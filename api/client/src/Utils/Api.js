import axios from "axios";
const baseURL = "https://guarded-falls-50845.herokuapp.com";

export default {
  getBook: function (search) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
  },
  saveBook: function (bookData) {
    return axios.post(`${baseURL}/api/books", ${bookData}`);
  },
  getAllFavorites: function () {
    return axios.get(`${baseURL}/api/books`);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  getBookByTitle: function (title) {
    return axios.get("/api/books/title/" + title);
  },
};
