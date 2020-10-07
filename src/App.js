import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const setUsername = (event) => {
    setName(event.target.value);
  };

  const setUserPassword = (event) => {
    setPassword(event.target.value);
  };

  const printValues = () => {
    console.log(name);
    console.log(password);
  };

  return (
    <div>
      <input type="text" value={name} onChange={setUsername} />
      <input type="password" value={password} onChange={setUserPassword} />
      <button onClick={printValues}>Submit</button>
    </div>
  );
}

export default App;
