import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Movie({ title, releaseDate, memo, toggle }) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.title === nextMovie.title
    && prevMovie.releaseDate === nextMovie.releaseDate;
}

const MemoizedMovie = React.memo(Movie, moviePropsAreEqual);

function App() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} toggle={toggle}/>
      <Movie title="Heat" releaseDate="December 15, 1995" memo={false} toggle={toggle}/>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
