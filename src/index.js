import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Movie({ title, releaseDate, memo }) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

const MemoizedMovie = React.memo(Movie);

function App() {
  const [, setToggle] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} />
      <Movie title="Heat" releaseDate="December 15, 1995" memo={false} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
