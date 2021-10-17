import React from "react";

import "./index.css";

import Hero from "../../Components/Hero";
import SearchBox from "../../Components/Search";

function Books() {
  // search will hold the inital Title/word searched. It's needed for the API call
  //result holds the api response with the data in the format I want, them I passe down trough props to create the book card

  return (
    <>
      <Hero />
      <SearchBox />
    </>
  );
}

export default Books;
