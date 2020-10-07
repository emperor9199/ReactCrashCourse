import React from "react";
import { useParams } from "react-router-dom";

const Greet = () => {
  const params = useParams();

  return <h1>Hello {params.name}</h1>;
};

export default Greet;
