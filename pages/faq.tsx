import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import FAQPage from "../components/FAQPage";

const Product: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <FullLayout>
        <FAQPage />
      </FullLayout>
    </>
  );
};

export default Product;
