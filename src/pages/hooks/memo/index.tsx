import { type NextPage } from "next";
import Page from "../../../components/Page";
import MemoHook from "./MemoHook";

const Home: NextPage = () => {
  return (
    <Page title="Memo Hook">
      <MemoHook />
    </Page>
  );
};

export default Home;
