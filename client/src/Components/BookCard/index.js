import React from "react";

function BookCard(props, results) {
  const newArray = props.results;

  console.log(newArray[0]);
  console.log(newArray);
  // console.log(props);
  newArray.map(item => {
    console.log(item.title);
  });

  resultAPi;

  return (
    <div>
      <ul>
        {newArray.map(result => (
          <li>
            {" "}
            <p>{result.tittle}</p>
          </li>
        ))}
      </ul>
      <p>FUCK</p>
    </div>
  );
}

export default BookCard;
