import { type NextPage } from "next";
import Page from "../../../components/Page";
import StateHook from "./StateHook";

const Home: NextPage = () => {
  return (
    <Page title="State Hook">
      <StateHook />
    </Page>
  );
};

export default Home;
