import { type NextPage } from "next";
import Head from "next/head";
import Page from "../../../components/Page";
import EffectHook from "./EffectHook";

const Home: NextPage = () => {
  return (
    <Page title="Effect Hook">
      <EffectHook />
    </Page>
  );
};

export default Home;
