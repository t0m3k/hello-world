import React, { useEffect, useState } from "react";

const NoMemo = () => {
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [helloText, setHelloText] = useState("");
  console.log("NoMemo render");

  const clickHandler = () => {
    setQuantity((it) => it + 1);
  };

  const expensiveFunction = (quantity: number) => {
    let i = 0;
    while (i < 1500000000) i++;
    return quantity;
  };

  useEffect(() => {
    // This will run when quantity is changed, causing rerender
    setNumber(expensiveFunction(quantity)); // This will be called only when quantity changes
  }, [quantity]);

  useEffect(() => {
    // This will run when number or name are changed, causing rerender
    setHelloText(`You said hello ${number} times` + (name ? `, ${name}` : ""));
  }, [number, name]);

  return (
    <>
      <div className="flex">
        <p className="m-1">Type your name:</p>
        <input
          className="m-1 w-80 rounded-xl border bg-gray-200 px-2 text-gray-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={clickHandler}
          className="m-1 w-60 rounded-xl border bg-green-800 hover:bg-green-700"
        >
          SAY HELLO
        </button>
      </div>

      <p className="m-1">{helloText}</p>
    </>
  );
};

export default NoMemo;
