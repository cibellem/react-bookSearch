import axios from "axios";

export default {
  getBook: function(search) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAQyE5qbJ1H76JhCYlBO72T6qYHyv5TjQ8`
    );
  }
};
