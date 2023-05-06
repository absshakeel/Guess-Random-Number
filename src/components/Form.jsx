import React, { useState } from "react";

const Form = () => {
  const [value, setvalue] = useState("");
  const getvalue = (e) => {
    setvalue(e.target.value);
  };
  const [result, setresult] = useState(0);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (value === "Bangladesh") {
      setresult(1);
    } else {
      setresult(2);
    }
  };
  return (
    <div>
      <h2 style={{ color: "green" }}>
        {result === 1 && "Hurrah! your guess is correct"}
      </h2>
      <h2 style={{ color: "red" }}>
        {result === 2 && " Sorry your guess is wrong please try again"}
      </h2>
      <form>
        <p>What is your country name </p>
        <textarea onChange={getvalue} />
        <br />
        <button onClick={handlesubmit} disabled={result === 1}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
