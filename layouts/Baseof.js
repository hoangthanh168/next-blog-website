import Head from "next/head";
import React from "react";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const Base = ({ children }) => {
  return (
    <>
      <Header />
      {/* main site */}
      <main>{children}</main>
    </>
  );
};

export default Base;
