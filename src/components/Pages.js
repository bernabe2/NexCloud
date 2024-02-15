import React from "react";

const Pages = () => {
  return (
    <div>
      <h2>Select a number:</h2>
      <ul>
        {[...Array(10).keys()].map((number) => (
          <li key={number}>{number + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pages;
