import React , { useState } from "react";
import API from "../../Utils/Api";
import "./index.css";

import BookCard from "../../Components/BookCard/index";
import Hero from "../../Components/Hero";
import SearchBox from "../../Components/Search";

function MainPage() {
  const [result, setResult] = useState([]);

  const handleSearch=(search)=>{
    API.getBook(search).then((res) => {
      const resultAPi = res.data.items;
      const newArray = [];
      resultAPi.forEach((item) => {
        const newObj = item.volumeInfo;
        newArray.push(newObj);
      });
      setResult(newArray);
    });

  }

  return (
    <>
      <Hero />
      <SearchBox handleSearch={handleSearch} />
      <BookCard results={result}  />
      </>
  );
}

export default MainPage;
