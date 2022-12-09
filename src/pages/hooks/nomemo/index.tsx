import { type NextPage } from "next";
import Page from "../../../components/Page";
import NoMemo from "./NoMemo";

const Home: NextPage = () => {
  return (
    <Page title="NoMemo">
      <NoMemo />
    </Page>
  );
};

export default Home;
