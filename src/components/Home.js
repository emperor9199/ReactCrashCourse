import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h1>
      Goto <Link to="/about">About</Link>
    </h1>
  );
};

export default Home;
