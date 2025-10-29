
import { useState } from "react";
function GetInputVal() {
  const [val, setVal] = useState("hello");

  const handler = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <h1>Get Input Field Value</h1>
      <input
        type="text"
        value={val}
        onChange={handler}
        placeholder="username"
      />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}> Clear Button</button>
    </div>
  );
}

export default GetInputVal;
