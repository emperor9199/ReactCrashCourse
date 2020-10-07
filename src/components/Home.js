import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const refVar = useRef();
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log(refVar);
  }, [counter1, counter2]);

  return (
    <div ref={refVar}>
      <h1>
        Goto <Link to="/about">About</Link>
      </h1>
      <h1 onClick={() => setCounter1(counter1 + 1)}>Counter1 {counter1}</h1>
      <h1 onClick={() => setCounter2(counter2 + 1)}>Counter2 {counter2}</h1>
    </div>
  );
};

export default Home;
