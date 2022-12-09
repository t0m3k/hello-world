import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You said hello ${quantity} times`;
  });

  const fetchData = () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("John");
      }, 3000);
    });
  };

  useEffect(() => {
    let mounted = true; // This is a flag to prevent memory leaks
    fetchData().then((response) => {
      // This is an async function
      if (mounted) {
        setName(response);
      }
    });
    return () => {
      mounted = false; // This will be called when the component is unmounted
    };
  }, []);

  const clickHandler = () => {
    setQuantity((it) => it + 1);
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className="m-1 w-60 rounded-xl border bg-green-800 hover:bg-green-700"
      >
        SAY HELLO
      </button>
      <p className="m-1">
        You said hello {quantity} times, {name}
      </p>
    </>
  );
};

export default EffectHook;
