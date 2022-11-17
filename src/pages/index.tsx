import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

const Home: NextPage = () => {
  const [quantity, setQuantity] = useState(0);

  const welcomes = useMemo(() => {
    return Array.from(Array(quantity)).map((_, i) => {
      return <Hello key={i} />;
    });
  }, [quantity]);

  return (
    <>
      <Head>
        <title>HELLO 2i</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-900">
        <div className="container mx-auto flex min-h-screen flex-col p-4 text-4xl font-bold text-white">
          <p className="flex">
            <span className="mr-5 text-red-500">const</span>sayHelloTo = (
            <Image
              className="ml-3 mr-3 flex"
              src="/icon-logo.svg"
              alt="2iLogo"
              width={40}
              height={40}
            />
            ) {" => {"}
          </p>
          <p className="mt-5 ml-20 flex">
            {"print('hello ' + "}
            <Image
              className="ml-3 mr-3 flex"
              src="/icon-logo.svg"
              alt="2iLogo"
              width={40}
              height={40}
            />
            {")"}
          </p>
          <p>{"}"}</p>
          <div className="mt-10 flex">
            <button
              className="mr-10"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              RUN
            </button>
            <button onClick={() => setQuantity(0)}>CLEAR</button>
          </div>
          {welcomes}
        </div>
      </main>
    </>
  );
};

export default Home;

const Hello = () => (
  <p className="mt-5 flex">
    Hello
    <Image
      className="ml-3 mr-3 flex"
      src="/icon-logo.svg"
      alt="2iLogo"
      width={40}
      height={40}
    />
  </p>
);