import React, { useState } from "react";

const Guess = () => {
  const [value, setvalue] = useState(0);
  const [msg, setmsg] = useState(0);
  const [count, setcount] = useState(0);

  const getvalue = (e) => setvalue(e.target.value);
  function getRandomInt() {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    // Scale the decimal to a number between 1 (inclusive) and 11 (exclusive)
    const scaledDecimal = randomDecimal * 10 + 1;

    // Round the scaled number down to the nearest integer
    const randomInt = Math.floor(scaledDecimal);

    // Return the random integer
    return randomInt;
  }
  const retry = (e) => {
    e.preventDefault();

    setcount(0);
    setmsg(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setcount((prev) => prev + 1);
    const random = getRandomInt();
    if (parseInt(value) === random) {
      setmsg(1);
    } else {
      setmsg(2);
    }
  };
  return (
    <>
      <div>
        <h2>Guess the lucky number from 1 -10</h2>
        <h1 style={{ color: "red" }}>
          {" "}
          {count === 3 &&
            "Bad luck you have cross the 3 times. Please try again"}
        </h1>
        <h1 style={{ color: "red" }}>
          {" "}
          {msg === 2 && "SORRY! your guess is Wrong"}
        </h1>
        <h1 style={{ color: "green" }}>
          {" "}
          {msg === 1 && "Hurrah! your guess is Correct"}
        </h1>
        <form>
          <input type="number" onChange={getvalue} />
          <button onClick={handleSubmit} disabled={count === 3}>
            Guess
          </button>
          {count === 3 && (
            <button style={{ backgroundColor: "red" }} onClick={retry}>
              Rest
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Guess;
