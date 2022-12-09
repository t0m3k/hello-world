import { type NextPage } from "next";
import Hello from "../components/hello";
import Page from "../components/Page";

const Home: NextPage = () => {
  return (
    <Page title="State Hook">
      <Hello />
    </Page>
  );
};

export default Home;
