import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ProductPage from "../components/ProductPage";

const Product: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <FullLayout>
        <ProductPage />
      </FullLayout>
    </>
  );
};

export default Product;
