import { type NextPage } from "next";
import Head from "next/head";
import Hello from "../components/hello";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HELLO 2i</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-0 flex min-h-screen flex-col bg-TwoIBlue p-8 text-4xl font-bold text-white">
        <Hello />
      </main>
    </>
  );
};

export default Home;
