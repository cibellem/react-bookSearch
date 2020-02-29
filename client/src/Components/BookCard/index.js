import React from "react";

function BookCard(props, results) {
  console.log(props);

  return (
    <div>
      {props.results.map(result => (
        <ul className="table" key={result.title}>
          <li>
            <p>{result.title}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default BookCard;
