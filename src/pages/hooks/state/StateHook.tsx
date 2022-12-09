import type { NextPage } from "next";
import React, { useState } from "react";

const StateHook = () => {
  const [quantity, setQuantity] = useState(0);

  // function increment(it: number) {
  //   return it + 1;
  // }

  const clickHandler = () => {
    setQuantity((it) => it + 1);
    setQuantity((it) => it + 1);
    // setQuantity(increment);
    // setQuantity(increment);
  };
  return (
    <>
      <button
        onClick={clickHandler}
        className="m-1 w-60 rounded-xl border bg-green-800 hover:bg-green-700"
      >
        SAY HELLO
      </button>

      {Array.from(Array(quantity)).map((_, i) => (
        <HelloElement key={i} who="2i" />
      ))}
    </>
  );
};

const HelloElement: NextPage<{ who: string }> = (props) => (
  <p className="m-2 w-fit rounded-xl bg-green-800 p-2">Hello, {props.who}!</p>
);

export default StateHook;
