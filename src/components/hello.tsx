import Image from "next/image";
import { useMemo, useState } from "react";

const Hello = () => {
  const [quantity, setQuantity] = useState(0);
  const welcomes = useMemo(() => {
    return Array.from(Array(quantity)).map((_, i) => {
      return <Hello2i key={i} />;
    });
  }, [quantity]);

  return (
    <>
      <p className="flex">
        <span className="mr-5 text-red-500">const</span>sayHelloTo = (
        <Logo />) {" => {"}
      </p>
      <p className="mt-5 ml-20 flex">
        {"print('Hello ' + "}
        <Logo />
        {")"}
      </p>
      <p>{"}"}</p>
      <div className="mt-10 flex">
        <button
          className="mr-10 rounded-md border p-2"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          RUN
        </button>
        <button
          className="mr-10 rounded-md border p-2"
          onClick={() => setQuantity(0)}
        >
          CLEAR
        </button>
      </div>
      {welcomes}
    </>
  );
};

export default Hello;

const Logo = () => (
  <Image
    className="ml-3 mr-3 flex"
    src="/icon-logo.svg"
    alt="2iLogo"
    width={40}
    height={40}
  />
);

const Hello2i = () => (
  <p className="mt-5 flex">
    Hello <Logo />
  </p>
);
