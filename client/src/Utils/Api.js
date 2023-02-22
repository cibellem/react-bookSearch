import axios from "axios";

export default {
  getBook: function (search) {

    const params = {
      printType: "books",
      filter: "free-ebooks"
    };

    return axios.get(
      // make this an env vir
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAQyE5qbJ1H76JhCYlBO72T6qYHyv5TjQ8`,{params}
    );
  },
 
};

