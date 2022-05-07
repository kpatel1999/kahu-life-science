// Next
import type { NextPage } from "next";
import Head from "next/head";

// Components
import FullLayout from "../components/FullLayout";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kahu Lifescience</title>
        <meta
          name="description"
          content="DoubleDice is a patent-backed non - custodial gateway to the pooled betting multiverse"
        />
      </Head>
      <FullLayout>
        <HomePage />
      </FullLayout>
    </>
  );
};

export default Home;
