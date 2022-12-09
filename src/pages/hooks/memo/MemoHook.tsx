import React, { useMemo, useState } from "react";

const MemoHook = () => {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  console.log("MemoHook render");

  const clickHandler = () => {
    setQuantity((it) => it + 1);
  };

  const expensiveFunction = (quantity: number) => {
    let i = 0;
    while (i < 1500000000) i++;
    return quantity;
  };

  // Value will be assigned directly to howManyTimes, without calling useState and rerendering the component
  const howManyTimes = useMemo(() => {
    return expensiveFunction(quantity); // This will be called only when quantity changes
  }, [quantity]);

  // Calculations below are cheap, so they can be called every time the component is rendered
  // Hello text doesn't need to be kept in state, it's value doesn't change
  const helloText =
    `You said hello ${howManyTimes} times` + (name ? `, ${name}` : ""); // This will run on every render

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

export default MemoHook;
