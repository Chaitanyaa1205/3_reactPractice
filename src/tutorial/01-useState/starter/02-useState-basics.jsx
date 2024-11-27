import { useState } from "react";

const UseStateBasics = () => {
  const [count, setcount] = useState(0);
  const [ct, setct] = useState(1);
  const changeCount = () => {
    setcount(count + 1);
  };

  return (
    <>
      <h2>the count is {count}</h2>
      <button type="button" className="btn" onClick={changeCount}>
        click me
      </button>
    </>
  );
};

export default UseStateBasics;
